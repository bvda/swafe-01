# Lesson 01 exercises
In this exercise we will implement a simple page to display some of the concepts introduced in lesson 01.

We will be building a simple application that prints a list of courses.

## Exercise 01-1
### Create new Angular workspace
Before we can create a Angular application, we will have to create a workspace:

1. Open a terminal and run `ng new`<sup>(<a href="https://angular.io/cli/new">docs</a>)</sup> to create a new workspace with an application.
2. Test that every went well by running `ng serve --open`<sup>(<a href="https://angular.io/cli/serve">docs</a>)</sup> to start the application and open a browser and navigate the application.
3. Go to `./src/app/app.component.html` and remove all content from the file. _Hint: Now would be a good time to make your first commit if you are using version control_

## Exercise 01-2
### Add navigation bar component
A common design pattern is to add have navigation bar at the very top of a web application. So we will go ahead and generate a component for that.

1. Run `ng g c navigationBar`<sup>(<a href="https://angular.io/cli/generate#component-command">docs</a>)</sup> to generate `NavigationBarComponent` and declare it in `AppModule`
2. Add the component to `./src/app/app.component.html`

## Exercise 01-3
### Add course module
Next, we will begin implementing a new feature: A course module that can handles presentation of courses offered. The first thing we will add 

1. Run `ng g m course`<sup>(<a href="https://angular.io/cli/generate#module-command">docs</a>)</sup> to create a course module
2. Add `CourseListItem` component to `CourseModule` with `ng g c courseListItem -m course`

## Exercise 01-4
### Create a library
Let us make library for our data model

1. Generate a library with `ng g library models`<sup>(<a href="https://angular.io/cli/generate#library-command">docs</a>)</sup>
2. Add a TypeScript `interface`<sup>(<a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces">docs</a>)</sup> with the following properties:
  - `name` – A string that contains the name of the course
  - `code` – The course code
  - `ects` – The ECTS credits awarded for completing the course
3. Declare an array and some courses to it in `AppComponent`

## Exercise 01-5
### Create a course list
Now that we have some data, we are ready to show it in the application

1. Go to `./src/app/app.component.html` and use to `*ngForOf`<sup>(<a href="https://angular.io/api/common/NgForOf">docs</a>)</sup> to create an instance of `CourseListItemComponent` for each element in the course array
2. Go to the template file for `CourseListItem` and add an `@Input()`<sup>(<a href="https://angular.io/api/core/Input">docs</a>)</sup> of type `Course`
3. Print out the contents of the provided object in the template

## Questions
Please consider the following questions:
- Could the application have been organized in other ways?
- What would the pros and cons be for different approaches?
- Why are we using a library for the models?
- What other feature modules could be added to the project?
- What other properties could we add to the `Course` model?

When you have got some great ideas for improving the application. Go ahead and try implementing them!