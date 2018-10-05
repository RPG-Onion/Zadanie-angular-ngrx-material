import {Joke}                                           from '../../Models/joke.model';
import {ILoadableState, LoadableState}                  from '../../../Interfaces/LoadableState';
import {JokeActions, JokeActionsType, JokesLoadSuccess} from '../actions/joke.actions';
import {Dictionary, EntityState}                        from '@ngrx/entity';

export interface IJokesState extends ILoadableState, EntityState<Joke> {}

export interface IJokesStore {
  jokes: IJokesState;
}

class JokesState implements IJokesState, EntityState<Joke> {
  failed: boolean;
  loaded: boolean;
  loading: boolean;
  entities: Dictionary<Joke>;
  ids: string[] | number[];

  constructor(entities = {}) {
    this.entities = entities;
    this.failed   = false;
    this.loaded   = false;
    this.loading  = false;
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
  const entities: Dictionary<Joke> = action.payload.reduce(
    (intities: Dictionary<Joke>, joke: Joke) => {
      return {
        ...intities,
        [joke.id]: joke
      };
    }, {...state.entities}
  );

  return {
    ...state,
    ...LoadableState.Success,
    entities: entities,
    ids     : Object.keys(entities)
  };
}

function loadFailActionHandler(state: JokesState): JokesState {
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
      return loadFailActionHandler(state);
    }
  }

  return state;
}

export {JokesInitialState, JokesReducer};
