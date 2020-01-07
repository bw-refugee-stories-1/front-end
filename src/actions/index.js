import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_STORY = 'ADD_STORY';
export const APPROVE_STORY = 'APPROVE_STORY';
export const DELETE_STORY = 'DELETE_STORY';

export const getStories = () => dispatch => {
  dispatch( {type: FETCH_START} );

  axiosWithAuth()
    .get('/users') // TODO: Check name
    .then( response => {
      dispatch( {type: FETCH_SUCCESS, payload: response.data} );
      console.log("Response: ", response.data)
    })
    .catch( err => {
      dispatch( {type: FETCH_FAILURE, payload: err});
      console.error("Error:", err);
    })
  } 
