import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_STORY,
  APPROVE_STORY,
  DELETE_STORY} from '../actions';

const initialState = {
  stories: [],
  isFetching: false,
  error: '',
};

export const storyReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_SUCCESS: 
      return {
        ...state,
        stories: action.payload,
        isFetching: false
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
  }
}

const story = {
  name: '',
  email: '',
  title: '',
  text: '',
  id: '',
  approved: false,
}