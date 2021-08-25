import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeModule } from './attribute/attribute.module';
import { CustomModule } from './custom/custom.module';
import { StructuralModule } from './structural/structural.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AttributeModule,
    CustomModule,
    StructuralModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
