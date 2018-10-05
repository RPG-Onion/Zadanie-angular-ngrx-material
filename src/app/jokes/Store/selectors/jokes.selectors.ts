import {createSelector}             from '@ngrx/store';
import {IJokeEntities, IJokesState} from '../reducers/joke.reducer';
import {getJokesState}              from '../../../store/selectors/app.selector';
import {Sort}                       from '@angular/material';
import {Joke}                       from '../../Models/joke.model';

const getJokesLoading  = createSelector(getJokesState, (state: IJokesState) => state.loading);
const getJokesLoaded   = createSelector(getJokesState, (state: IJokesState) => state.loaded);
const getJokesFailed   = createSelector(getJokesState, (state: IJokesState) => state.failed);
const getJokesEntities = createSelector(getJokesState, (state: IJokesState) => state.data);
const getJokes         = createSelector(getJokesEntities, (entities: IJokeEntities) => Object.keys(entities).map(id => entities[id]));

const getJokesSorted = createSelector(
  getJokes,
  (entities: Joke[], sort: Sort) => {

    const compare = (a, b, isAsc) => (a < b ? -1 : 1) * (isAsc ? 1 : -1);

    const data = entities.slice();
    if (!sort.active || sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'type':
          return compare(a.type, b.type, isAsc);
        case 'setup':
          return compare(a.setup, b.setup, isAsc);
        default:
          return 0;
      }
    });
  }
);


export {
  getJokesLoading,
  getJokesLoaded,
  getJokesFailed,
  getJokesSorted,
  getJokesEntities,
  getJokes
};
