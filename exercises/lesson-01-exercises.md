# Lesson 01 exercises
In this exercise we will implement a simple page to display our skills 

## Exercise 01-1
### Create new Angular workspace
Before we can create a Angular application, we will have to create a workspace:

1. Open a terminal and run `ng new`<sup>(<a href="https://angular.io/cli/new">docs</a>)</sup> to create a new workspace with an application.
2. Test that every went well by running `ng serve --open`<sup>(<a href="https://angular.io/cli/serve">docs</a>)</sup> to start the application and open a browser and navigate the application.
3. Go to `./src/app/app.component.html` and remove all content from the file. _Hint: Now would be a good time to make your first commit if you are using version control_

## Exercise 01-2
### Add navigation bar component

1. Run `ng g c navigationBar` to generate `NavigationBarComponent` and declare it in `AppModule`
2. Add the component to `./src/app/app.component.html`

## Exercise 01-3
### Add course module

1. Run `ng g m course` to create a course module
2. Add a component to `CourseModule` with `ng g c courseListItem -m course`

## Exercise 01-4
### Create a library

1. Generate a library with `ng g library models`
2. Add a TypeScript `interface`<sup>(<a href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces">docs</a>)</sup> with the following properties:
  - `name` – A string that contains the name of the course
  - `code` – The course code
  - `ects` – The ECTS credits awarded for completing the course
3. Declare an array and some courses to it in `AppComponent`

## Exercise 01-5
### Create a course list

1. Go to `./src/app/app.component.html` and use to `*ngForOf`<sup>(<a href="https://angular.io/api/common/NgForOf">docs</a>)</sup> to create an instance of `CourseListItemComponent` for each element in the course array
2. Go to the template file for `CourseListItem` and add an `@Input()` of type `Course`
3. Print out the contents of the provided object in the template