# Lesson 07 exercises
## Exercise 07-1
### Setup and run `lesson07-exercises`
Do the following steps to run the provided Angular project:

- Run `npm install` in the project root folder
- Run `ng serve -o` to start the application
- Run `ng test` to start the test runner

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
### Test `lesson07-exercises`
We are now ready write some tests. Here are some ideas of what we might want to test:

- Does the list items render the expected values?<sup>(<a href="https://angular.io/guide/testing-components-scenarios#component-with-inputs-and-outputs">docs</a>)</sup>
- Are we sure that the list of cars renders correctly?<sup>(<a href="https://angular.io/guide/testing-components-scenarios#use-a-page-object">docs</a>)</sup>
- How can we tell if the navigation to the `list` path works as expected?<sup>(<a href="https://angular.io/guide/testing-components-scenarios#components-with-routerlink">docs</a>)</sup>
- Are we sure that `CarService` behaves as expected?<sup>(<a href="https://angular.io/guide/testing-services">docs</a>)</sup>

## Exercise 07-4
### Deploy `lesson07-exercises` to GitHub Pages
Now that we have our fully tested and server-side rendered application up and running, it is time to deploy on a web server, so our users (and search engines) are able to find it. We will be using GitHub Pages<sup>(<a href="https://angular.io/guide/deployment#deploy-to-github-pages">docs</a>)</sup> for this.