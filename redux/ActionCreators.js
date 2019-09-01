import * as ActionTypes from './ActionTypes';
import { apiurl } from '../utility/ApiUrls';

export const fetchAPI = () => dispatch => {

    dispatch(Pending());
    console.log(apiurl);

    return fetch(apiurl)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }).then(response => response.json())
        .then(response => {
            console.log("wang", response);
            dispatch(Success(response))
        })
        .catch(error => dispatch(Failed(error.message)));
};

export const Pending = () => ({
    type: ActionTypes.PENDING
});

export const Failed = (errmess) => ({
    type: ActionTypes.ERROR,
    payload: errmess
});

export const Success = (data) => ({
    type: ActionTypes.SUCCESS,
    payload: data
});





