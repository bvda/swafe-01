import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureOneModule } from './feature-one/feature-one.module';
import { FeatureTwoModule } from './feature-two/feature-two.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureOneModule,
    FeatureTwoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
