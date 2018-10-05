import {Injectable}                                   from '@angular/core';
import {Actions, Effect, ofType}                      from '@ngrx/effects';
import {JokeActions, JokesLoadFail, JokesLoadSuccess} from '../actions/joke.actions';
import {catchError, map, switchMap}                   from 'rxjs/operators';
import {JokeApiService}                               from '../../Services/joke-api.service';
import {of}                                           from 'rxjs';

@Injectable()
export class JokesEffects {
  @Effect()
  loadPizzas$ = this.actions$.pipe(ofType(JokeActions.JOKES_LOAD))
    .pipe(
      switchMap(() => this.jokesService.getJokes().pipe(
        map(jokes => new JokesLoadSuccess(jokes)),
        catchError(error => of(new JokesLoadFail(error)))
      ))
    );

  constructor(
    private jokesService: JokeApiService,
    private actions$: Actions
  ) {}
}
