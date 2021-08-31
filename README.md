# SWAFE-01
## Introduction
Welcome to the SWAFE-01 repository

## Getting started
Node.js is required to run and install the slides. Go to the [Node.js](https://nodejs.org/) and download the latest version and install it on you machine.

We recommend using [Visual Studio Code](https://code.visualstudio.com/) as the Integrated Development Environmen (IDE) for this course.

Check that everything is installed correctly by running the following commands in a terminal `node -v` and `npm -v`. (If you get some output, everything should be all good)

## Slides
The slides in this course is built with [reveal.js](https://revealjs.com) that is a HTML presentation framework. 

When running the slides for the first time, you will need to download the dependencies using the Node package manager (npm). Run `npm install` in the terminal in the `./slides` directory.

Run the slides by typing `npm start` and open a browser and go to [http://0.0.0.0:8000](http://0.0.0.0:8000) (or [http://localhost:8000](http://localhost:8000) if you are on Windows).

## Example code
Each lesson has a workspace where all example code is located. The code is split up into multiple projects.

When running a workspace for the first time, you will need to download the dependencies using the Node package manager (npm). Run `npm install` in the terminal in the `./examples/<LESSON_FOLDER>`.

### Lesson 01
Located in `./examples/lesson01-introduction`
- **Bindings** Property bindings, two-way data binding and events. Run this project with `ng serve bindings`
- **Components** A simple application with two components. Run this project with `ng serve components`
- **Directives** Built-in attribute and structural directives. Also contains and custom attribute directive. Run this project with `ng serve directives`
- **Modules** Code organized by modules. Run this project with `ng serve modules`
- **Pipes** Shows how pipes can be used to format data based on locale and how a custom pipe can print object data as a string. Run this project with `ng serve pipes`
- **Services** A services that returns the current date and time injected into the root component. Run this project with `ng serve services`