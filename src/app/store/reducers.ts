import {ActionReducerMap}          from '@ngrx/store';
import {IJokesState, JokesReducer} from '../jokes/Store/reducers/joke.reducer';
import {JokesEffects}              from '../jokes/Store/effects/jokes.effect';

interface IAppState {
  jokes: IJokesState;
}

const Reducers: ActionReducerMap<IAppState> = {
  jokes: JokesReducer
};

const Effects = [
  JokesEffects
];

export {
  IAppState,
  Reducers,
  Effects
};
