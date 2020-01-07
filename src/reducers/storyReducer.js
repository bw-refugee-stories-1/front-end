import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FALIURE,
  ADD_STORY,
  APPROVE_STORY,
  DELETE_STORY} from '../actions/storyActions';

const initialState = {
  stories: [],
  isFetching: false,
  error: '',
};

export const storyReducer = (state = initialState, action) => {
  switch(action.type) {
    
  }
}

