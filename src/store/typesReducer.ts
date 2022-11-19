
export type initialState = {
    number:number
};
export enum ActionTypes{
    INCREMENT = 'INCREMENT',
    DECREMENT='DECREMENT'
};

export type increase = {
    type: ActionTypes.INCREMENT,
}
export type decrease = {
    type: ActionTypes.DECREMENT,
}
export type Actions = increase | decrease;