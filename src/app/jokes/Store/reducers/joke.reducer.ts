import {Joke}                                                          from '../../Models/joke.model';
import {ILoadableState, LoadableState}                                 from '../../../Interfaces/LoadableState';
import {JokeActions, JokeActionsType, JokesLoadFail, JokesLoadSuccess} from '../actions/joke.actions';

export interface IJokesState extends ILoadableState {
  data: IJokeEntities;
}

export interface IJokeEntities {
  [key: number]: Joke;
}

class JokesState implements IJokesState {
  data: IJokeEntities;
  failed: boolean;
  loaded: boolean;
  loading: boolean;

  constructor(data = []) {
    this.data    = data;
    this.failed  = false;
    this.loaded  = false;
    this.loading = false;
  }
}

const JokesInitialState = new JokesState();

function loadActionHandler(state: JokesState): JokesState {
  return {
    ...state,
    ...LoadableState.Loading,
  };
}

function loadSuccessActionHandler(state: JokesState, action: JokesLoadSuccess): JokesState {
  const entities: IJokeEntities = action.payload.reduce(
    (intities: IJokeEntities, joke: Joke) => {
      return {
        ...intities,
        [joke.id]: joke
      };
    }, {...state.data}
  );

  return {
    ...state,
    ...LoadableState.Success,
    data: entities
  };
}

function loadFailActionHandler(state: JokesState, action: JokesLoadFail): JokesState {
  return {
    ...state,
    ...LoadableState.Fail,
  };
}

function JokesReducer(state: JokesState = JokesInitialState, action: JokeActionsType): IJokesState {

  switch (action.type) {
    case JokeActions.JOKES_LOAD: {
      return loadActionHandler(state);
    }
    case JokeActions.JOKES_LOAD_SUCCESS: {
      return loadSuccessActionHandler(state, action as JokesLoadSuccess);
    }
    case JokeActions.JOKES_LOAD_FAIL: {
      return loadFailActionHandler(state, action as JokesLoadFail);
    }
  }

  return state;
}

export {JokesInitialState, JokesReducer};
