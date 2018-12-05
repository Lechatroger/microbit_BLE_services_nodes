// name: Param_Microbit
// outputs: 1
msg.payload = {};
msg.payload.microbitID = "e5fd0123ed24"; 
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

