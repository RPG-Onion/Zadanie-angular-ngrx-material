import {ActionReducerMap}          from '@ngrx/store';
import {IJokesStore, JokesReducer} from '../jokes/Store/reducers/joke.reducer';
import {JokesEffects}              from '../jokes/Store/effects/jokes.effect';

interface IAppState extends IJokesStore {

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
