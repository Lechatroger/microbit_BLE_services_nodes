# DRAFT IN PROGRESS! Node-RED functions for microbit

One Paragraph of project description goes here

# 1. Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# 2. Prerequisites

## 2.1. On the Raspberry Pi

1. Follow [Noble prerequisites](https://github.com/noble/noble)

2. Install microbit API made by [sandeepmistry](https://github.com/sandeepmistry/node-bbc-microbit)
```
npm install bbc-microbit
```
This creates a 'bbc-microbit' folder in /home/pi/.node-red/node_modules .

3. In /home/pi/.node-red/settings.js , add line 210 as on figure below.

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/settings.png)

4. Place 'Microbit_2.0' folder in your Node-RED functions folder: /home/pi/.node-red/lib/functions .



# 3. Development

There are two ways to program your microbit: with the microbit online compiler or with the Mbed C++ online compiler.

## 3.1. Microbit JavaScript online compiler

For basic usage of the microbit, the microbit-BLE project is appropriated. It only starts all bluetooth services. The services needed are then chosen through the Node-RED functions (see section 1.2.3).

>To do:   
>- Upload 'microbit-BLE.hex' on the microbit flash drive

The microbit-BLE project is set up such as no pairing is required: anyone can connect via Bluetooth.

The figure on the right shows the microbit-BLE project from the microbit online compiler.

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/MicrobitBLE.png)

You can also create a new program, if so, make sure that the pairing settings in the project settings are right what you want.

## 3.2. Mbed C++ online compiler

The other way to program your microbit is to use Mbed.

>To do:   
>- Open Mbed online compiler   
>- 'Import' tab -> 'Upload' tab -> Choose file (**microbit-samples.zip**)

microbit-samples.zip originately comes from [mbed/microbit-samples](https://os.mbed.com/teams/BBC/code/microbit-samples/) , more samples have been added to this. Now it's time to choose your sample and to upload it on the microbit!

>To do:
>- Decomment the '#define  MICROBIT_SAMPLE_NAME_OF_YOUR_SAMPLE' line in 'source/MicroBitSamples.h'.(see figure below)
>- Select the BBC micro:bit board (on Mbed compiler)
>- Compile
>- Upload the generated hex file on the microbit flash drive

![Mbed_select](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/Mbed_select.png)

Other samples are available [here](https://github.com/lancaster-university/microbit-samples)

## 3.3. Raspberry PI

Once you have all prerequisites done for the Raspberry, you should be able to load the Node-RED functions.

### 3.3.1. FindIDs

>To do:  
>- Add a 'function' node to your flow in Node-RED and open the function  
>- 'Open library' -> Upload 'FindIDs'  
>- You can rename the function as FindIDs

FindIDs is a function that discovers all Microbits. It returns in the Node-RED terminal the IDs and the addresses of each of them. It also returns the addresses and IDs in the payload of its output. The figure below shows how the FindIDs function can be used.

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/FindIDs2.png)

Once you've run this flow, you can copy the IDs and addresses of your Microbits in a notebook.

### 3.3.2 ParamMicrobit

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/ParamMicrobit.png)

>To do:  
>- The same way you did for FindIDs, upload the ParamMicrobit function. 

This function creates an empty JavaScript object (JSON) on [line 1]. Then it fills this object with attributes such as microbitID, accelerometer, buttons...[line 2 - 12] For the microbitID attribute, paste the ID you've previously identified. The other attributes are the bluetooth services you might want to use. Enable = True or Disable = False.
Then it returns the object on the output of the function. [line 14]

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/ParamMicrobit_code.png)

>To do:  
>- Paste the ID of your Microbit into ParamMicrobit function.  
>- Enable or Disable the bluetooth services.

### 3.3.3. Microbit

>To do:  
>- The same way you did for FindIDs and ParamMicrobit, upload the Microbit functions.  

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/Microbit.png)
![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/MicrobitOutputs.png)

On the input of the Microbit function comes the output of the ParamMicrobit function. The outputs of the Microbit function are listed above in the right order. The outputs are the values of the bluetooth services. There is also an OnConnected event and an OnDisconnect event, the output of these events are not important. These should be used as triggers.

### 3.3.4. Auto Reconnect setup

What if your microbit and Raspberry are communicating fine and you unplug the microbit? You might want that the Raspberry connects automatically to the microbit when is powered back. In this case the OnDisconnect event is usefull. 

>To do:  
>- Wire the OnDisconnect output to the intput of ParamMicrobit function as on figure below.

When the microbit is disconnected it will trigger back the ParamMicrobit function and then the Microbit function, which will attempt to connect to the same microbit. The Microbit function will try to connect to the microbit until it is connected.

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/AutoReconnect.png)

### 3.3.5. Multiple Microbit setup

What if you want to uses more than one microbit on one Rasberry? Very easy, the only requirement is to have a delay between each microbit as shown on figure below. This delay prevents the Raspberry to attempt to connect to multiple microbits at the same time.  

![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/figure/MultipleMicrobit.png)

# 4. Running the tests

Explain how to run the automated tests for this system

## 4.1. Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

## 4.2. And coding style tests

Explain what these tests test and why

```
Give an example
```

# 9. Authors

* **Sébastien Debenest**  
* **Jun Watanabi**

# 10. Acknowledgments

Thanks to [sandeepmistry](https://github.com/sandeepmistry) and [Lancaster University](https://github.com/lancaster-university). Everything made here is based on their work.



 
