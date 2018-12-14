# Node-RED nodes for microbit Bluetooth Low Energy services

  This project shows how to develop an application that uses Bluetooth Low Energy services of the bbc microbit in pair with Node-RED on Raspberry PI. It explains how to setup the microbit to start the BLE services, and how to build a Node-RED flow with our nodes related to the BLE services. This project is based on [sandeepmistry](https://github.com/sandeepmistry) and [Lancaster University](https://github.com/lancaster-university) its work.


# 1. Getting Started

  These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# 2. Prerequisites

## 2.1. On the Raspberry Pi

>To do: 
>- Follow [Noble prerequisites](https://github.com/noble/noble)

>- Install microbit API made by [sandeepmistry](https://github.com/sandeepmistry/node-bbc-microbit)
```
npm install bbc-microbit
```
This creates a **bbc-microbit** folder in **/home/pi/.node-red/node_modules** .

>- In **/home/pi/.node-red/settings.js** , add line 210 as on figure below.

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/settings.png)

We have created 3 nodes for Node-RED. 
> To add them into your Node-RED project:
>- In Node-RED: Import -> Clipboard -> Paste the [**nodes_microbit**](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/Raspberry/nodes_microbit) file text -> Import

The code of our nodes are available [**here**](https://github.com/Lechatroger/nodes_microbit_BLE_services/tree/master/Raspberry/Microbit_nodes)

# 3. Development

There are two ways to program your microbit: with the microbit JavaScript online compiler or with the Mbed C++ online compiler.

## 3.1. Microbit JavaScript online compiler

For basic usage of the microbit, the microbit_BLE project is appropriated. It only starts all bluetooth services. The services needed are then chosen through the Node-RED nodes (see section 3.3.3).

>To do:   
>- Upload [**microbit_BLE.hex**](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/microbit/microbit_BLE.hex) on the microbit's flash drive

The microbit_BLE project is set up such as no pairing is required: anyone can connect via Bluetooth.

The figure on the right shows the microbit_BLE project from the microbit online compiler.

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/MicrobitBLE.png)

You can also create a new program, if so, make sure that the pairing settings in the project settings are right what you want.

## 3.2. Mbed C++ online compiler

The other way to program your microbit is to use Mbed.

**Unfortunatly we are unable to use BLE services when the microbit program is compiled on Mbed. The code of the BLEservices sample we made is probably not right. The BLEservices sample comes from [here](https://github.com/lancaster-university/microbit-samples) and some minor changes concerning the configuration have been done. Favor the Microbit JavaScript online compiler solution.**

What you may need to do if you still want to try compiling on Mbed.

>To do:   
>- Open Mbed online compiler   
>- 'Import' tab -> 'Upload' tab -> Choose file [**microbit_samples.zip**](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/microbit/microbit_samples.zip) -> Import

**microbit_samples.zip** originately comes from [mbed/microbit-samples](https://os.mbed.com/teams/BBC/code/microbit-samples/) , more samples have been added to this. Now it's time to choose your sample and to upload it on the microbit!

>To do:
>- Decomment '//#define  MICROBIT_SAMPLE_NAME_OF_YOUR_SAMPLE' line in **source/MicroBitSamples.h**.(see figure below)
>- Select the BBC micro:bit board (on Mbed compiler)
>- Compile
>- Upload the generated hex file on the microbit flash drive

![Mbed_select](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/Mbed_select.png)

Other samples are available [here](https://github.com/lancaster-university/microbit-samples)

## 3.3. Raspberry PI
  
We have created a Node-RED Hello World project. 
, 
> To add it to your flow:
>- In Node-RED: Import -> Clipboard -> Paste the [**Hello_World**](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/Raspberry/Hello_World) file text -> Import

**It is recommended to read the following documentation of our nodes before trying Hello World**

### 3.3.1. Find IDs

Find_IDs is a node that discovers all Microbits. It returns in the Node-RED terminal the IDs and the addresses of each of them. It also returns the addresses and IDs in the payload of its output. The figure below shows how the Find_IDs node is used.

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/FindIDs2.png)

Once you've run this flow, you can copy the IDs and addresses of your Microbits in a notebook.

### 3.3.2 Param Microbit

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/ParamMicrobit.png)

This node creates an empty JavaScript object (JSON) on [line 1]. Then it fills this object with attributes such as microbitID, accelerometer, buttons...[line 2 - 12] For the microbitID attribute, paste the ID you've previously identified. The other attributes are the bluetooth services you might want to use. Enable = True or Disable = False.
Then it returns the object on the output of the node. [line 14]

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/ParamMicrobit_code.png)

>To do:  
>- Paste the ID of your Microbit into ParamMicrobit node.  
>- Enable or Disable the bluetooth services.

### 3.3.3. Microbit

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/Microbit.png)
![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/MicrobitOutputs.png)

On the input of the Microbit node comes the output of the ParamMicrobit node. The outputs of the Microbit node are listed above in the right order. The outputs are the values of the bluetooth services. There is also an OnConnected event and an OnDisconnect event, the output of these events are not important. These should be used as triggers.

### 3.3.4. Auto Reconnect setup

What if your microbit and Raspberry are communicating fine and you unplug the microbit? You might want that the Raspberry connects automatically to the microbit when powered back. In this case the OnDisconnect event is usefull. 

>To do:  
>- Wire the OnDisconnect output to the intput of ParamMicrobit node as on figure below.

When the microbit is disconnected it will trigger back the ParamMicrobit node and then the Microbit node, which will attempt to connect to the same microbit. The Microbit node will try to connect to the microbit until it is powered back and connected.

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/AutoReconnect.png)

### 3.3.5. Multiple Microbit setup

What if you want to uses more than one microbit on one Rasberry? Very easy, the only requirement is to have a delay between each microbit as shown on figure below. This delay prevents the Raspberry to attempt to connect to multiple microbits at the same time.  

![microbit-BLE](https://github.com/Lechatroger/nodes_microbit_BLE_services/blob/master/figure/MultipleMicrobit.png)


# 4. Futur work

* We are unable to use BLE services when the microbit program is compiled on Mbed. The code of the BLEservices sample used is probably not right. The BLEservices sample comes from [here](https://github.com/lancaster-university/microbit-samples) and some minor changes concerning the configuration have been done.

# 5. Authors

* **Sébastien Debenest (Lechatroger)**  
* **Jun Watanabe**

# 6. Acknowledgments

Thanks to [sandeepmistry](https://github.com/sandeepmistry) and [Lancaster University](https://github.com/lancaster-university). Everything made here is based on their work.



 
