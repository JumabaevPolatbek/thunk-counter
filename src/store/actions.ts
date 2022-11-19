import { ActionTypes } from "./typesReducer"


export const increaseCount = () => {
    return {
        type:ActionTypes.INCREMENT
    }
}
export const decreaseCount = () => {
    return {
        type:ActionTypes.DECREMENT
    }
}