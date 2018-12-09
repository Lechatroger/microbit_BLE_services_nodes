// name: Microbit (Asynchronous)
// outputs: 16
var BBCMicrobit = global.get('bbcmicrobit');

var BUTTON_VALUE_MAPPER = ['Not Pressed', 'Pressed', 'Long Press'];
var pin0 = 0; var pin1 = 1; var pin2 = 2;
var id = msg.payload.microbitID;

console.log('Discovering microbit...');
//BBCMicrobit.discover(function(microbit) 
BBCMicrobit.discoverById(id, function(microbit) {console.log('\tMicrobit discovered! id = %s, address = %s', microbit.id, microbit.address);

    console.log('Connecting to microbit...');
    microbit.connectAndSetUp(function() {
        console.log('\tMicrobit connected!');
        node.send([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, msg]);
        
        microbit.on('disconnect', function() {
            console.log('\tMicrobit disconnected!');
            node.send([null, null, null, null, null, null, null, null, null, null, null, null, null, null, msg, null]);
        });

        microbit.on('disconnect', function() {
            console.log('\tMicrobit disconnected!');
            node.send([null, ..., null, msg, null]);
        });
        
        if (msg.payload.accelerometer === true){
            
            microbit.on('accelerometerChange', function(x, y, z) {console.log('\tAccelerometer = %d %d %d G', x, y, z);
                node.send([{payload:x}, {payload:y}, {payload:z}, null, null, null, null, null, null, null, null, null, null, null, null, null]);
            });
                
            console.log('Setting accelerometer period to %d ms...', msg.payload.period);
            microbit.writeAccelerometerPeriod(msg.payload.period, function() {console.log('\tAccelerometer period set!');
                        
                console.log('Subscribing to accelerometer...');
                microbit.subscribeAccelerometer(id , function() {console.log('\tSubscribed to accelerometer!');});
            }); 
        }
        
        if (msg.payload.buttons === true){
            
            console.log('Subscribing to buttons...');
            microbit.subscribeButtons(id, function() {console.log('\tSubscribed to buttons!');});

            microbit.on('buttonAChange', function(valueA) {console.log('\tButton A: ', BUTTON_VALUE_MAPPER[valueA]);
                node.send([null, null, null, {payload: BUTTON_VALUE_MAPPER[valueA]}, null, null, null, null, null, null, null, null, null, null, null, null]);
            });
            
            microbit.on('buttonBChange', function(valueB) {console.log('\tButton B: ', BUTTON_VALUE_MAPPER[valueB]);
                node.send([null, null, null, null, {payload: BUTTON_VALUE_MAPPER[valueB]}, null, null, null, null, null, null, null, null, null, null, null]);
            });
        }
        
        if ((msg.payload.pin0 === true)||(msg.payload.pin1 === true)||(msg.payload.pin2 === true)){
            
            console.log('Subscribing to pin data...');
            microbit.subscribePinData(id, function() {console.log('\tSubscribed to pin data!');}); 
            
            if(msg.payload.pin0 === true){
                console.log('Setting pin0 %d as input...', pin0);
                microbit.pinInput(pin0, function() {console.log('\tPin0 set as input!');

                    console.log('Setting pin0 %d as analog...', pin0);
                    microbit.pinAnalog(pin0, function() {console.log('\tPin0 set as analog!');});
                });
                
                microbit.on('pinDataChange', function(pin0, value0) {console.log('\tPin 0: value = %d', pin0, value0);
                    node.send([null, null, null, null, null, {payload:value0}, null, null, null, null, null, null, null, null, null, null]);
                });
            }
            
            if(msg.payload.pin1 === true){
                console.log('Setting pin1 %d as input...', pin1);
                microbit.pinInput(pin1, function() {console.log('\tPin1 set as input!');

                    console.log('Setting pin1 %d as analog...', pin1);
                    microbit.pinAnalog(pin1, function() {console.log('\tPin1 set as analog!');});
                });
                
                microbit.on('pinDataChange', function(pin1, value1) {console.log('\tPin 1: value = %d', pin1, value1);
                    node.send([null, null, null, null, null, null, {payload:value1}, null, null, null, null, null, null, null, null, null]);
                });
            }
            
            if(msg.payload.pin2 === true){
                console.log('Setting pin2 %d as input...', pin2);
                microbit.pinInput(pin2, function() {console.log('\tPin2 set as input!');

                    console.log('Setting pin2 %d as analog...', pin2);
                    microbit.pinAnalog(pin2, function() {console.log('\tPin2 set as analog!');});
                
                    microbit.on('pinDataChange', function(pin2, value2) {console.log('\tPin 2: value = %d', pin2, value2);
                        node.send([null, null, null, null, null, null, null, {payload:value2}, null, null, null, null, null, null, null, null]);
                    });
                });
            }
        }

        if (msg.payload.magnetometer === true){
            console.log('Subscribing to magnetometer...');
            microbit.subscribeMagnetometer(id, function() {console.log('\tSubscribed to magnetometer!');

                console.log('Setting magnetometer period to %d ms...', msg.payload.period);
                microbit.writeMagnetometerPeriod(msg.payload.period, function() {console.log('\tMagnetometer period set!');});
            });
            
            microbit.on('magnetometerChange', function(x, y, z) {console.log('\tMagnetometer: %d %d %d', x, y, z);
                node.send([null, null, null, null, null, null, null, null, {payload:x}, {payload:y}, {payload:z}, null, null, null, null, null]);
            });
        }

        if (msg.payload.magnetometerBearing === true){
            
            console.log('Subscribing to magnetometer bearing...');
            microbit.subscribeMagnetometerBearing(id, function() {console.log('\tSubscribed to magnetometer bearing!');

                console.log('Setting magnetometer period to %d ms...', msg.payload.period);
                microbit.writeMagnetometerPeriod(msg.payload.period, function() {console.log('\tMagnetometer period set!');});
            }); 
            
            microbit.on('magnetometerBearingChange', function(bearing) {console.log('\tMagnetometer bearing = %d', bearing);
                 node.send([null, null, null, null, null, null, null, null, null, null, null, {payload:bearing}, null, null, null, null]);
            });
        }

        if (msg.payload.temperature === true){
            microbit.on('temperatureChange', function(temperature) {console.log('\tTemperature = %d °C', temperature);
                node.send([null, null, null, null, null, null, null, null, null, null, null, null, {payload:temperature}, null, null, null]);
            });
            
            console.log('Setting temperature period to %d ms...', msg.payload.period);
            microbit.writeTemperaturePeriod(msg.payload.period, function() {console.log('\tTemperature period set!');
            
                console.log('Subscribing to temperature...');
                microbit.subscribeTemperature(id, function() {console.log('\tSubscribed to temperature!');});
            });
        }

        if (msg.payload.uart === true){
            microbit.on('uartData', function(data) {console.log('\tUart data: %s', data);
                node.send([null, null, null, null, null, null, null, null, null, null, null, null, null, {payload:data}, null, null]);
            });
            
            console.log('Subscribing to Uart...');
            microbit.subscribeUart(id, function() {console.log('Subscribed to Uart!');});
        }

    });
});

return msg;
