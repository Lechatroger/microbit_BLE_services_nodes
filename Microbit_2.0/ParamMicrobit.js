// name: ParamMicrobit
// outputs: 1
msg.payload = {};
msg.payload.microbitID = "e5fd0123ed24"; 
//Device #1: "e5fd0123ed24"
//Device #2: "cc65def3fc0b"
//Device #3: "d0e8fce1ee6a"
//Device #4: "d4f66c7718c8"
msg.payload.accelerometer = true;
msg.payload.buttons = false;
msg.payload.pin0 = false; 
msg.payload.pin1 = false;
msg.payload.pin2 = false;
msg.payload.magnetometer = false;
msg.payload.magnetometerBearing = false;
msg.payload.temperature = false;
msg.payload.uart = false;
msg.payload.period = 160; //Support values are: 1, 2, 5, 10, 20, 80, 160, or 640 ms.

return msg;

