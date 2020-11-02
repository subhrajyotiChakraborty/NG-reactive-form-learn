import { Action } from '@ngrx/store';

export const INCREASE_COUNT = '[Counter] Increase count';
export const DECREASE_COUNT = '[Counter] Decrease count';
export const RESET_COUNT = '[Counter] Reset count';

export class IncreaseCount implements Action {
    readonly type = INCREASE_COUNT;
}

export class DecreaseCount implements Action {
    readonly type = DECREASE_COUNT;
}

export class ResetCount implements Action {
    readonly type = RESET_COUNT;
}

export type CounterActions = IncreaseCount | DecreaseCount | ResetCount;
