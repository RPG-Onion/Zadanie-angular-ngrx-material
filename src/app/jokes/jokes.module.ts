import {NgModule}                from '@angular/core';
import {CommonModule}            from '@angular/common';
import {JokesListComponent}      from './components/jokes-list/jokes-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
}                                 from '@angular/material';
import {HttpClientModule}         from '@angular/common/http';
import {PunchlineDialogComponent} from './components/punchline-dialog/punchline-dialog.component';
import {StoreModule}              from '@ngrx/store';
import {Effects, Reducers}        from '../store/reducers';
import {EffectsModule}            from '@ngrx/effects';

const materialComponents = [
  MatListModule,
  MatGridListModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatGridListModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports        : [
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserAnimationsModule,
    ...materialComponents,
    StoreModule.forRoot(Reducers),
    EffectsModule.forRoot(Effects),
  ],
  declarations   : [JokesListComponent, PunchlineDialogComponent],
  exports        : [JokesListComponent],
  entryComponents: [PunchlineDialogComponent]
})
export class JokesModule {}
