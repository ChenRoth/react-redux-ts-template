export interface IState {
    counter: number;
}

export interface IAction {
    type: string;
    payload: Object;
}

const getInitialState = (): IState => {
    return {
        counter: 0,
    };
}

export const reducer = (state: IState = getInitialState(), action: IAction) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}