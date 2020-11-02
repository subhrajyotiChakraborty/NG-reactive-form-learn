import { ActionReducerMap } from '@ngrx/store';

import * as fromCounter from '../components/counter/store/counter.reducer';

export interface AppState {
    counter: fromCounter.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    counter: fromCounter.counterReducer
};
