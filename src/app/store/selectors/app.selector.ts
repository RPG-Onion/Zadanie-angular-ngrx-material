import {createSelector} from '@ngrx/store';
import {IJokesStore}    from '../../jokes/Store/reducers/joke.reducer';

export const getJokesState = createSelector((state: IJokesStore) => state.jokes);
