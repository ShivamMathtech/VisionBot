# Arduino setup and commissioning

## What is included

`firmware/visionbot_controller/visionbot_controller.ino` targets Arduino Mega 2560 with six positional hobby servos and a gripper. Install **Servo** and **ArduinoJson 7** using the Arduino IDE Library Manager. Select the correct board and serial port, then compile/upload. The sketch has not been compiled against an actual Arduino toolchain in this environment or tested on a physical arm.

Firmware ships with `COMMISSIONED = false`; an ARM request is rejected. This deliberate gate prevents uncalibrated generic mappings from immediately moving motors.

## Wiring

| Connection | Arduino Mega pin |
|---|---|
| Normally-closed interlock to GND | 2, INPUT_PULLUP |
| Joint 1 signal | 3 |
| Joint 2 signal | 4 |
| Joint 3 signal | 5 |
| Joint 4 signal | 6 |
| Joint 5 signal | 7 |
| Joint 6 signal | 8 |
| Gripper signal | 10 |
| USB serial | Computer USB |

Use an appropriately rated external servo supply. Do not power the arm's servos from the Arduino 5V pin. The signal and servo supply grounds need a common reference. Use a physical emergency power-cut circuit and mechanical protection for gravity-loaded joints. Opening the normally-closed signal loop triggers the firmware latch; it does not physically isolate power by itself.

Detaching a servo removes holding torque and may allow an arm or payload to fall. Support/counterbalance the arm before commissioning or stop tests.

## Calibrate before enable

1. Disconnect loads and support the mechanism.
2. Measure each servo's safe pulse/angle range and direction.
3. Set `QMIN`, `QMAX`, `SERVO_MIN`, `SERVO_MAX`, and `HOME` in firmware. Match joint limits and DH geometry in `configs/robot.yaml`.
4. The provided endpoint mappings are examples, not calibrated values for your hardware. `SERVO_MIN` may be greater than `SERVO_MAX` for a reversed joint, provided both remain inside that servo's measured safe range.
5. Align the physical arm to HOME before the first ARM after boot. The system has no absolute encoders or homing switches and cannot discover an unknown startup pose.
6. Test the interlock and heartbeat loss with motors unloaded and supported.
7. Set `COMMISSIONED = true`, recompile, and upload only after completing those checks.
8. Connect from Hardware Control. A connection alone does not arm servos.
9. Select a real camera source; the virtual demo camera is blocked in hardware mode.
10. Explicitly verify the enable dialog, then use a small manual movement at low speed.
11. For object tasks, calibrate a real planar workspace and verify a separate test point before executing a reviewed task.

## Protocol

115200 baud, newline-delimited JSON, protocol version 1. One bounded host command is sent with a unique `command_id`; the response is an `ACK` or `ERROR` with that ID. Timeouts latch a software stop. No automatic reconnect or motion resume occurs.

```json
{"type":"MOVE_JOINTS","joints":[0,55,-95,40,0,0],"command_id":"example"}
```

Commands: `HELLO`, `HEARTBEAT`, `ARM`, `DISARM`, `RESET`, `MOVE_JOINTS`, `GRIPPER`, `ESTOP`.

- Startup: servos detached; startup q initialized to configured HOME.
- Physical loop open: latched stop.
- Heartbeat absent for 1000 ms while armed: latched stop.
- Host sends heartbeat every 250 ms and expects ACK within 650 ms.
- Motion updates use independent firmware velocity/acceleration caps at roughly 50 Hz.
- Telemetry publishes at 5 Hz and is labeled `commanded_no_encoders`.
- RESET clears the latch only with the physical loop closed; it does not ARM.
- Backend resets return to simulation; physical enable must be repeated.

Software timing, serial ACK and commanded servo angles cannot establish actual robot position. Add encoder feedback, following-error checks and appropriate physical safety equipment before serious hardware deployment.
