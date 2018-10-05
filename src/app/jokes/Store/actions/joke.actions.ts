import {Action} from '@ngrx/store';
import {Joke}   from '../../Models/joke.model';

const JokeActions = {
  JOKES_LOAD        : 'JOKES_LOAD',
  JOKES_LOAD_SUCCESS: 'JOKES_LOAD_SUCCESS',
  JOKES_LOAD_FAIL   : 'JOKES_LOAD_FAIL',
};

class JokesLoad implements Action {
  public readonly type: string = JokeActions.JOKES_LOAD;
  public payload               = null;
}

class JokesLoadSuccess implements Action {
  public readonly type: string = JokeActions.JOKES_LOAD_SUCCESS;

  constructor(public payload: Joke[]) {}
}

class JokesLoadFail implements Action {
  public readonly type: string = JokeActions.JOKES_LOAD_FAIL;

  constructor(public payload: any) {}
}

type JokeActionsType = JokesLoad | JokesLoadSuccess | JokesLoadFail;

export {
  JokeActions,
  JokeActionsType,
  JokesLoad,
  JokesLoadSuccess,
  JokesLoadFail,
};
