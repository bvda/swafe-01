# Lesson 06 exercises
## Exercise 06-1
### Setup and run `lesson06-exercises`
Do the following steps to run the provided Angular project:

- Run `npm install` in the project root folder
- Run `ng serve -o`

When everything is up and running, you are ready to continue with the exercises.

## Exercise 06-2
### Add `@angular/flex` to the project
Install Angular Flex Layout in the project:

- Go to https://github.com/angular/flex-layout and follow the instructions there

## Exercise 06-3
### Add a grid of cards to `HostsComponent`
Create a pane of cards that displays data for `Host` objects (located in `exercises/lesson06-exercises/src/app/hosts.service.ts`)</sup>

- Create a new component named `HostCard`  
- Add a `<mat-card>`<sup>(<a href="https://material.angular.io/components/card/overview">docs</a>)</sup> element
- Use `fxLayout`<sup>(<a href="https://github.com/angular/flex-layout/wiki/fxLayout-API">docs</a>) to create rows of two elements
- Check out the Material Design guidelines<sup>(<a href="https://material.io/components/cards">docs</a>)</sup> for inspiration

## Exercise 06-4
### Add actions and a reducer
Before we can start to dispatch actions<sup>(<a href="https://ngrx.io/guide/store/actions">docs</a>)</sup>, we will have to define them.

- Add the approiate actions to `exercises/lesson06-exercises/src/app/state/hosts.actions.ts`
- Setup the reducer in `exercises/lesson06-exercises/src/app/state/hosts.reducer.ts`

## Exercise 06-5
### Add an effect
We want to isolate `HostsService` from `HostsCompoent`, and for that, we are introducing an effect, that listens for a fetch event and dispatches a retrieved event when the service has fetched data. 

- Set up effects<sup>(<a href="https://ngrx.io/guide/effects">docs</a>)</sup> for `Host` data in the store
- Configure the effect in `exercises/lesson06-exercises/src/app/state/hosts.effects.ts` to fetch all hosts and dispatch an action for the `Host` reducer

## Exercise 06-6
### Create a table for `AccessLogEntry` data
Build a table that displays all log entries. There are a lot of data, so you might need some pagination

- Add a `<mat-table>`<sup>(<a href="https://material.angular.io/components/table/overview">docs</a>)</sup> to `exercises/lesson06-exercises/src/app/access-log/access-log.component.html`
- Set up an `Observable` data source <sup>(<a href="https://material.angular.io/components/table/overview#observable-stream-of-data-arrays">docs</a>)</sup>
- Add a `<mat-paginator>` element to the table

## Exercise 06-7
### Optional stuff
If you feel for it, set up effects for the access log.