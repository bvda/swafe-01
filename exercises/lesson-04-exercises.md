# Lesson 04 exercises

## Exercise 04-1
### Create application and add modules
- Create a new application with `ng new`<sup>(<a href="https://angular.io/cli/new">docs</a>)</sup>
- Add two modules with `ng g m`<sup>(<a href="https://angular.io/cli/generate#module-command">docs</a>)</sup> for implementing a template-driven form and a reactive form _Hint: You could give them a telling name like `ReactiveModule` and `TemplateModule`_


## Exercise 04-2
### Setup template-driven form
- Add a new component with `ng g c`<sup>(<a href="https://angular.io/cli/generate#component">docs</a>)</sup>. This is here we will add a form. Make sure that the component is added to the right module. _Hint: Check the documentation to do this is a sweet one-liner_
- Import `FormsModule` in the template module.

## Exercise 04-3
### Setup reactive form
- Add a new component with `ng g c`<sup>(<a href="https://angular.io/cli/generate#component">docs</a>)</sup>. Make sure that the component is added to the right module.
- Import `ReactiveFormsModule` in the template module.

## Exercise 04-4
### Setup service and mock data
- Create a file called `class.type.ts` and copy/paste the following content:
```typescript
export interface Class {
  name: string;
  roles: Array<Role>;
}

interface Role {
  name: string;
}

export const CLASSES = [{
  name: 'Warrior',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Paladin',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }, { 
    name: "Healer"
  }]
}, {
  name: 'Hunter',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Rouge',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Priest',
  roles: [{
    name: "Healer"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Shaman',
  roles: [{
    name: "Healer"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Mage',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Warlock',
  roles: [{
    name: "Damage"
  }]
}, {
  name: 'Monk',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }, {
    name: "Healer"
  }]
}, {
  name: 'Druid',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }, {
    name: "Healer"
  }]
}, {
  name: 'Demon Hunter',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }]
}, {
  name: 'Death Knight',
  roles: [{
    name: "Tank"
  }, {
    name: "Damage"
  }]
}]
```

- Create a file called `race.type.ts` and copy/paste the following content:
```typescript
export interface Race {
  name: string;
}

export const RACES_ALLIANCE = [{
  name: "Human"
}, {
  name: "Dwarf"
}, {
  name: "Night Elf"
}, {
  name: "Gnome"
}, {
  name: "Draenei"
}, {
  name: "Worgen"
}, {
  name: "Pandaren"
}]

export const RACES_HORDE = [{
  name: "Orc"
}, {
  name: "Undead"
}, {
  name: "Tauren"
}, {
  name: "Troll"
}, {
  name: "Blood Elf"
}, {
  name: "Goblin"
}, {
  name: "Pandaren"
}]
``` 

- Create a service named `WarcraftService` and copy/paste following content:
```typescript
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Class, CLASSES } from './class.type';
import { Race, RACES_ALLIANCE, RACES_HORDE } from './race.type';

@Injectable({
  providedIn: 'root'
})
export class WarcraftService {

  constructor() { }

  getClasses(): Observable<Array<Class>> {
    return of(CLASSES)
  }

  getAllianceRaces(): Observable<Array<Race>> {
    return of(RACES_ALLIANCE)
  }

  getHordeRaces(): Observable<Array<Race>> {
    return of(RACES_HORDE)
  }
}
```

## Exercise 04-5
### Setup the vanilla form
Now that we have some data, we are ready to 
- Create a form with the following input fields: 
  - `name`
  - `password`
  - `confirm_password`
  - `race`
  - `class`
  - `level`
  - `description`
- You will need to think about what type on input fields<sup>(<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">docs</a>)</sup> to use. Fields `race` and `class` must be populated with data from `WarcraftService`
- Add a `ngsubmit`<sup>(<a href="https://angular.io/api/forms/NgForm#onsubmit">docs</a>)</sup> to the form
- Before moving on, copy/paste the form into the components we created in Exercise 04-2 and 04-03. We will apply a template-driven and a reactive approach later

## Exercise 04-6
### Template-driven approach
- Setup the form with the template-driven directive `ngModel`<sup>(<a href="https://angular.io/api/forms/NgModel">docs</a>)</sup> and `ngModelGroup`<sup>(<a href="https://angular.io/api/forms/NgModelGroup">docs</a>)</sup>

## Exercise 04-7
### Reactive approach
- Setup the form with the reactive directives `formGroup`<sup>(<a href="https://angular.io/api/forms/FormGroupDirective">docs</a>)</sup>, `formControlName`<sup>(<a href="https://angular.io/api/forms/FormControlName">docs</a>)</sup> and `formGroupName`<sup>(<a href="https://angular.io/api/forms/FormGroupName">docs</a>)</sup> _Hint: You can use `FormBuilder`<sup>(<a href="https://angular.io/api/forms/FormBuilder">docs</a>)</sup> to create your form data model_

## Exercise 04-8
### Validation
- Add some validation to the form fields
  - `name` is required
  - `level` must be in the range `1-60`
  - `password` and `confirm_password` is required and must match
  - `race` is required
  - `class` is required
- Show the validation error, if any, to the user _Hint: You could create a separate component to display error messages_  