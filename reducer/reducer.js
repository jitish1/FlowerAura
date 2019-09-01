import * as ActionTypes from '../redux/ActionTypes';

// const initialState = {
//     items: [],
//     item: {}
// }

export const FaReducer = (state = { isLoading: true, errMess: null, data: {} }, action) => {

    switch (action.type) {
        case ActionTypes.SUCCESS:

            return { ...state, isLoading: false, errMess: null, data: action.payload };

        case ActionTypes.PENDING:
            return { ...state, isLoading: true, errMess: null, data: {} }

        case ActionTypes.ERROR:
            return { ...state, isLoading: false, errMess: action.payload };


        default:
            return state;
    }
};