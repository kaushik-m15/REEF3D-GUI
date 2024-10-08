# REEF3D-GUI
A GUI built using Electron for open-source hydrodynamics solver [REEF3D](https://github.com/REEF3D/REEF3D).

Disclaimer: This project is an independent effort from the developer and shares no affiliation to the official REEF3D Team. The author acknowledges the efforts of the REEF3D Team in developing such a robust program.

## How does it work?
Being an Electron app, the inputs in the UI are stored into plain text files (ctrl.txt and command.txt) using JS, which are recognized by [REEF3D](https://github.com/REEF3D/REEF3D) and [DIVEMesh](https://github.com/REEF3D/DIVEMesh). To start the meshing and simulation, the PowerShell script is used and its STDOUT is read in fixed intervals to update the progress bar on the UI (WIP).

## Compatibility
Changes in the PowerShell script have to be made to point to the correct path of REEF3D and DIVEMesh executables to run it in your own system. This program has only been tested in Windows 10 22H2 using WSL running Ubuntu 24.04. There shouldn't be any problems running it in Windows 11. It can be made to work in a Linux distro by writing an equivalent BASH script and subsequently changing the code pointing to the PowerShell script. This can be further improved by using Node.js to change the script path depending on the system detected. 

## Motivation
This project was started by me to learn how to build apps in Electron. Therefore, being my first project, most of the code here is highly inefficient and full of issues.
