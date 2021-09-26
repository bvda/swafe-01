# Lesson 05 exercises

## Exercise 05-1
### Install Sass on your box
We will be using the JavaScript implementation of Sass:
- Install Sass with Node.js `npm i -g sass`<sup>(<a href="https://docs.npmjs.com/cli/v7/commands/npm-install">docs</a>)</sup>

If you want to go fast, check out https://sass-lang.com/install for alternatives (HomeBrew for macOS and Chocolatey for Windows)

## Exercise 05-2
### Flexbox Froggy
- Go to https://flexboxfroggy.com/
- Complete the game

## Exercise 05-3
### Grid garden
- Go to https://cssgridgarden.com/
- Complete the game

## Exercise 05-4
### The login screen
- Create a new Angular project<sup>(<a href="https://angular.io/cli/new">docs</a>)</sup> or use one you have already created
- Add a new component `Login` to the project<sup>(<a href="https://angular.io/cli/generate#component-command">docs</a>)</sup>
- Add a new component `LoginForm` to the project<sup>(<a href="https://angular.io/cli/generate#component-command">docs</a>)</sup>
- Add a new component `Navigation` to the project<sup>(<a href="https://angular.io/cli/generate#component-command">docs</a>)</sup>
- Make `Navigation` component fill the whole screen horizontally, and set a `background-color` (I like `cornflowerblue`)
  - Place `Navigation` at the top of `Login` component _Hint: Having trouble with some `margins`? Check the styles of `body` and/or `html` in the Developer Tools_
- Add a CSS grid to `LoginForm` with four vertical tracks and three horizontal tracks
  - Insert an user `input` element with type `text` and make it fill out second row across all columns
  - Insert a password `input` field with type `password` and make it fill out the third row across all columns
  - Insert a button and place in the bottom right grid cell
  - Insert a heading and place in the the first row and make a grid area that spans the first two columns
  - Insert a remember checkbox `input` field in the bottom left grid cell
- Go to `Login` and place `LoginForm` vertically and horizontally centered in the middle of the space below `Navigation` _Hint: You might want to do some viewport calculations_

You are finished when there are no scrollbars in the browser window :)