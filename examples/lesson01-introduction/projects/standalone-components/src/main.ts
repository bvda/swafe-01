import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { StandaloneComponent } from './standalone/standalone.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(StandaloneComponent).catch(err => console.log(err));
