# Node-RED functions for microbit IN PROGRESS!

One Paragraph of project description goes here

# 1.Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## 1.1.Prerequisites

What things you need to install the software and how to install them

### 1.1.1.On the Raspberry Pi

Install https://github.com/sandeepmistry/node-bbc-microbit

Place 'Microbit_2.0' folder in your Node-RED functions folder: /home/pi/.node-red/lib/functions



## 1.2.Development

There are two ways to program your microbit: with the microbit online compiler or with the Mbed C++ online compiler.

### 1.2.1.Microbit JavaScript online compiler

For basic usage of the microbit, the microbit-BLE project is appropriated. It only activates all bluetooth services. The services needed are then chosen through the Node-RED functions (see section 1.2.3).

>To do:   
>- Upload the microbit-BLE.hex on the microbit flash drive

The microbit-BLE project is set up such as no pairing is required: anyone can connect via Bluetooth.

The figure on the right shows the microbit-BLE project from the microbit online compiler.
![microbit-BLE](https://github.com/Lechatroger/microbit_node-red_functions/blob/master/MicrobitBLE.png)

You can also create a new program, if so, make sure that the pairing settings in the project settings are right what you want.

### 1.2.2.Mbed C++ online compiler

The other way to program your microbit is to use Mbed.

>To do:   
>- Open Mbed online compiler   
>- 'Import' tab -> 'Upload' tab -> Choose file (**microbit-samples.zip**)

microbit-samples.zip originately comes from https://os.mbed.com/teams/BBC/code/microbit-samples/ , more samples have been added to this. Now its time to choose your sample and to upload it on the microbit!

>To do:
>- Decomment the '#define  MICROBIT_SAMPLE_NAME_OF_YOUR_SAMPLE' line in 'source/MicroBitSamples.h'.
>- Select the BBC micro:bit board
>- Compile
>- Upload the generated hex file on the microbit flash drive

Other samples are available at https://github.com/lancaster-university/microbit-samples

### 1.2.3.Raspberry PI

End with an example of getting some data out of the system or using it for a little demo

# 2.Running the tests

Explain how to run the automated tests for this system

## 2.1.Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

## 2.2.And coding style tests

Explain what these tests test and why

```
Give an example
```

# 3.Deployment

Add additional notes about how to deploy this on a live system

# 4.Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

# 5.Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

# 6.Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

# 7.Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

# 8.Acknowledgments

Microbit API:   https://github.com/lancaster-university/microbit



