### Welcome to the toy robot toybox.
## Introduction
The intent of this repo is to showcase an exercise of developing a toy robot in a web API, modular enough to work with various clients. By no means is this a prime example but rather an attempt to do so.

## Toy Robot specifications
The specifications for the toy robot are as follows:
- The application is a simulation of a toy robot moving on a square tabletop, of unknown dimensions. These dimensions should be provided as an input
- There should be support for obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction, or colliding with an obstruction. Any movement that would result in the robot falling from the table or colliding with an obstacle must be prevented, however further valid movement commands must still be allowed.
- Create an application that can read in commands of the following form:
```
    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT
```
- PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.
- A robot that is not on the table can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.
Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

## Planned clients
Currently the planned clients to be used are a React frontend and a CLI.

## Installing
Right now, work is only being done on the API. This api is run on a node stack, version 18.15, and uses nodemon to run some of its scripts.

In order to install:
1) run `npm i` in the root folder of the API
2) run `npm i -g nodemon` to support the running of certain scripts.
   
This should be enough to get you up and running given you're using the right version of node.