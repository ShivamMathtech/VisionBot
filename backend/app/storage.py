import json,sqlite3,threading,time
class Store:
    def __init__(self,path):
        self.lock=threading.RLock()
        self.db=sqlite3.connect(path,check_same_thread=False)
        self.db.execute('PRAGMA journal_mode=WAL')
        self.db.executescript('''
        CREATE TABLE IF NOT EXISTS tasks(id TEXT PRIMARY KEY,body TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS profiles(id TEXT PRIMARY KEY,body TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS runs(id INTEGER PRIMARY KEY,ts REAL,body TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS logs(id INTEGER PRIMARY KEY,ts REAL,level TEXT,message TEXT);
        ''');self.db.commit()
    def save(self,table,key,body):
        assert table in ('tasks','profiles')
        with self.lock:
            self.db.execute(f'INSERT OR REPLACE INTO {table} VALUES (?,?)',(key,json.dumps(body,allow_nan=False)));self.db.commit()
    def list(self,table,summaries=False):
        assert table in ('tasks','profiles','runs')
        with self.lock:
            order='id DESC' if table=='runs' else 'id'
            column="json_remove(body, '$.samples')" if table=='runs' and summaries else 'body'
            return [json.loads(r[0]) for r in self.db.execute(f'SELECT {column} FROM {table} ORDER BY {order} LIMIT 200')]
    def get(self,table,key):
        assert table in ('tasks','profiles')
        with self.lock:
            row=self.db.execute(f'SELECT body FROM {table} WHERE id=?',(key,)).fetchone()
        if not row:raise KeyError(key)
        return json.loads(row[0])
    def delete(self,key):
        with self.lock:self.db.execute('DELETE FROM tasks WHERE id=?',(key,));self.db.commit()
    def log(self,level,message):
        with self.lock:
            self.db.execute('INSERT INTO logs(ts,level,message) VALUES(?,?,?)',(time.time(),level,message));self.db.commit()
            self.db.execute('DELETE FROM logs WHERE id NOT IN (SELECT id FROM logs ORDER BY id DESC LIMIT 5000)')
    def logs(self,level=None):
        with self.lock:
            rows=self.db.execute('SELECT ts,level,message FROM logs WHERE (? IS NULL OR level=?) ORDER BY id DESC LIMIT 200',(level,level)).fetchall()
        return [dict(zip(('timestamp','level','message'),r)) for r in rows]
    def run(self,report):
        with self.lock:self.db.execute('INSERT INTO runs(ts,body) VALUES (?,?)',(time.time(),json.dumps(report)));self.db.commit()
