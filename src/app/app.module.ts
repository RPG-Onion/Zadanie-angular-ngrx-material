import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppComponent}        from './app.component';
import {JokesModule}         from './jokes/jokes.module';
import {environment}         from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports     : [
    JokesModule,
    BrowserModule,
    StoreDevtoolsModule.instrument({
      maxAge : 25,
      logOnly: environment.production,
    }),
  ],
  providers   : [],
  bootstrap   : [AppComponent]
})
export class AppModule {}
