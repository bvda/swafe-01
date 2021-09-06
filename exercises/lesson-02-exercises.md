# Lesson 02 exercises

## Exercise 02-1
### Create a new workspace with routing
The first thing we need is a workspace with an application with a routing module

1. Generate a new workspace with routing using the CLI `ng new <WORKSPACE_NAME> --routing`<sup>(<a href="https://angular.io/cli/new">docs</a>)</sup>
2. We will need a component to display, when users tries to navigate to an unknown route. Use the CLI to generate it with `ng g c pageNotFound`<sup>(<a href="https://angular.io/cli/generate#component-command">docs</a>)</sup>

## Exercise 02-2
### Add root module routes
1. Go to `./src/app/app-routing.module.ts` and add the following paths<sup>(<a href="https://angular.io/guide/router#defining-a-basic-route">docs</a>)</sup>
    - `''` which loads `HomeComponent`
    - `'**'` which loads `PageNotFoundComponent`
2. Go to `./src/app/app.component.html` and remove the auto-generated code, and add an outlet<sup>(<a href="https://angular.io/api/router/RouterOutlet">docs</a>)</sup> with `<router-outlet>`
3. Add a link<sup>(<a href="https://angular.io/api/router/RouterLink">docs</a>)</sup> to `''` above the outlet

_Hint: Remeber that the order of the routes is significant_

## Exercise 02-3
### Create a new module
Let us create a new module to encapsulate all user functionality, so we can use lazy-loading<sup>(<a href="https://angular.io/guide/lazy-loading-ngmodules">docs</a>)</sup> to only deliver it to users who finds it interesting. Additionally, we will add routing to the module

1. Back to the CLI and generate a module with routing<sup>(<a href="https://angular.io/cli/generate#module-command">docs</a>)</sup>: `ng g m user --routing`
2. We will need a list and details component, so we generate those with the CLI: `ng g c -m user user/list` and `ng g c -m user user/details`
3. Go to `./src/app/user/user-routing.module.ts` and add paths for the newly created components:
    - `''` which loads `ListComponent`
    - `:id` which loads `DetailsComponent`

## Exercise 02-
### Setup lazy-loading for User module
1. Go to `./src/app/app-routing.module.ts` and add lazy-loading<sup>(<a href="https://angular.io/guide/lazy-loading-ngmodules">docs</a>)</sup> for path `'users'`
2. Add a link<sup>(<a href="https://angular.io/api/router/RouterLink">docs</a>)</sup> to `'users'` in `./src/app/app.component.html`

## Exercise 02-5
### Binding everything together
1. Generate a service named `SharedService` in the root module and add the following content:

```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  getBillionaires(): Observable<Billionaire[]> {
    return of(this.billionaires)
  }

  getBillionaire(uid: number): Observable<Billionaire> {
    return of(this.billionaires[uid])
  }
  
  billionaires: Billionaire[] = [{ 
    name: 'Bill Gates',
    net_worth: 133200000000,
    nationality: 'US',
  }, {
    name: 'Jeff Bezos',
    net_worth: 200100000000,
    nationality: 'US',
  }, {
    name: 'Elon Musk',
    net_worth: 190700000000,
    nationality: 'US',
  }, {
    name: 'Mark Zuckerberg',
    net_worth: 135200000000,
    nationality: 'US',
  }]
}

export interface Billionaire {
  name: string;
  net_worth: number;
  nationality: string;
} 
```
2. Print out `Billionaire[]` in `./src/app/user/list/list.component.html` using `*ngForOf`<sup>(<a href="https://angular.io/api/common/NgForOf">docs</a>)</sup> directive
3. For each element printed, add a link to `details/UID` _Hint: Use the local variable `index`<sup>(<a href="https://angular.io/api/common/NgForOf#local-variables">docs</a>)</sup> to generate simple IDs for the entries_
4. Retrieve the `Billionaire` in `DetailsComponent` _Hint: Inject `SharedService` and `ActivatedRoute`<sup>(<a href="https://angular.io/api/router/ActivatedRoute">docs</a>)</sup> into the component_