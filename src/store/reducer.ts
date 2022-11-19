import { Actions, ActionTypes } from "./typesReducer";

const defaultState = {
    number:0
}

export const counterReducer = (state=defaultState, action:Actions) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, number: state.number + 1 };
        case ActionTypes.DECREMENT:
            return { ...state, number: state.number - 1 };
        default:
            return state
    }
}