# Lesson 06 exercises
## Exercise 06-1
### Setup and run `lesson06-exercises`
Do the following steps to run the provided Angular project:

- Run `npm install` in the project root folder
- Run `ng serve -o`

## Exercise 06-2
### Add `@angular/flex` to the project
Install Angular Flex Layout in the project:

- Go to https://github.com/angular/flex-layout and follow the instructions there

## Exercise 06-3
### Add a grid of cards to `HostsComponent`

- Create a new component named `HostCard`  
- Add a `<mat-card>`<sup>(<a href="https://material.angular.io/components/card/overview">docs</a>)</sup> element
- Use `fxLayout`<sup>(<a href="https://github.com/angular/flex-layout/wiki/fxLayout-API">docs</a>) to create rows of two elements
- Check out the Material Design guidelines<sup>(<a href="https://material.io/components/cards">docs</a>)</sup> for inspiration

## Exercise 06-4
### Add actions and a reducer

- Add the approiate actions to `exercises/lesson06-exercises/src/app/state/hosts.actions.ts`
- Setup the reducer in `exercises/lesson06-exercises/src/app/state/hosts.reducer.ts`

## Exercise 06-5
### Add an effect

- Set up effects<sup>(<a href="https://ngrx.io/guide/effects">docs</a>)</sup> for `Host` data in the store
- Configure the effect in `exercises/lesson06-exercises/src/app/state/hosts.effects.ts` to fetch all hosts and dispatch an action for the `Host` reducer