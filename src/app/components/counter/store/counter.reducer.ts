import * as CounterActions from './counter.actions';

export interface State {
    count: number;
}

const initialState: State = {
    count: 0
};

export function counterReducer(state: State = initialState, actions: CounterActions.CounterActions) {
    switch (actions.type) {
        case CounterActions.INCREASE_COUNT:
            return {
                ...state,
                count: state.count + 1
            };

        case CounterActions.DECREASE_COUNT:
            return {
                ...state,
                count: state.count - 1
            };

        case CounterActions.RESET_COUNT:
            return {
                ...state,
                count: 0
            };

        default:
            return state;
    }
}


