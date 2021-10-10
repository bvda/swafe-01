# Lesson 07 exercises
## Exercise 07-1
### Setup and run `lesson07-exercises`
Do the following steps to run the provided Angular project:

- Run `npm install` in the project root folder
- Run `ng serve -o` to start the application
- Run `ng test` to start the test runner
- Install `ng add @nguniversal/express-engine`

When everything is up and running, you are ready to continue with the exercises.

## Exercise 07-2
### Setup automatic code coverage generation for `lesson07-exercises`
Let's setup auto generation of code coverage reports<sup>(<a href="https://angular.io/guide/testing-code-coverage">docs</a>)</sup>, so we can keep track while working with the code

- Open `angular.json` in the project root directory
- Find `test` node and add the `codeCoverage` set to `true` in the `options` node.
- Run `ng test`. If everything is set up correctly, a folder named `coverage` should have been generated in the project root
- Open `coverage/<APP_NAME>/index.html` to view the report
- Can you get a 100% coverage?

## Exercise 07-3
### Deploy `lesson07-exercises` to Firebase
Now that we have our fully tested and server-side rendered application up and running, it is time to deploy on a web server, so our users (and search engines) are able to find it. We will be using Firebase for this.

- The first thing we will need is the Firebase CLI<sup>(<a href="https://firebase.google.com/docs/cli">docs</a>)</sup>, install that in your global Node.js environment by running `npm i -g firebase-tools`.

- Go to the project root and run `ng add @angular/fire`

## Exercise 06-4
### Add actions and a reducer

## Exercise 06-5
### Add an effect

## Exercise 06-6
### Create a table for `AccessLogEntry` data

## Exercise 06-7
### Optional stuff