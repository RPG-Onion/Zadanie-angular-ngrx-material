import {createSelector} from '@ngrx/store';
import {IAppState}      from '../reducers';

export const getJokesState = createSelector((state: IAppState) => state.jokes);
