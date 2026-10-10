/* Run a server at 127.0.0.1:8000; install playwright and Chromium, then node tests/ui-smoke.cjs */
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1536,height:1100}});const errors=[];
 page.on('pageerror',e=>errors.push(String(e)));
 await page.goto('http://127.0.0.1:8000');await page.waitForSelector('.dashboard');
 await page.waitForFunction(()=>document.querySelector('.camera-view img')?.naturalWidth>0);
 await page.getByRole('button',{name:'Preview path',exact:true}).click();
 await page.getByRole('alert').filter({hasText:'Trajectory preview'}).waitFor({timeout:20000});
 await page.locator('nav').getByRole('button',{name:'Task Builder',exact:true}).click();
 await page.getByRole('button',{name:'Natural Language',exact:true}).click();
 await page.getByRole('button',{name:'Generate plan',exact:true}).click();
 await page.waitForFunction(()=>document.querySelector('input[aria-label="Task name"]')?.value==='Pick and place blue cube');
 assert.equal(await page.getByLabel('Task name').inputValue(),'Pick and place blue cube');
 await page.getByRole('button',{name:'Code Editor',exact:true}).click();
 await page.locator('.monaco-editor').waitFor({timeout:20000});
 await page.getByRole('button',{name:'Compile to task',exact:true}).click();
 await page.getByRole('alert').filter({hasText:'Script compiled'}).waitFor();
 for(const name of ['Computer Vision','Simulation','Hardware Control','Trajectory & Kinematics','Performance','Logs','Settings']){
   await page.locator('nav').getByRole('button',{name,exact:true}).click();
   await page.getByRole('heading',{name,exact:true}).waitFor();
 }
 await page.locator('nav').getByRole('button',{name:'Dashboard',exact:true}).click();
 await page.getByRole('button',{name:'Emergency Stop',exact:true}).last().click();
 await page.getByText('EMERGENCY STOP LATCHED',{exact:true}).waitFor();
 await page.getByRole('button',{name:'Reset emergency latch',exact:true}).click();
 await page.getByText('SIMULATION ENVIRONMENT',{exact:true}).waitFor();
 await page.screenshot({path:'dashboard-check.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth),false,'Mobile horizontal overflow');
 assert.deepEqual(errors,[]);
 await browser.close();console.log('Browser smoke passed: navigation, camera, preview, DSL, natural plan, emergency latch and mobile layout.');
})().catch(e=>{console.error(e);process.exit(1)});
