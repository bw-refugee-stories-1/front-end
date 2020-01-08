import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_STORY,
  APPROVE_STORY,
  REJECT_STORY} from '../actions';

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
        stories: [...state.stories, ...action.payload],
        isFetching: false
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_STORY:
      return {
        ...state,
        stories: [...state.stories, action.payload]
      }
    case APPROVE_STORY:
      return {
        ...state,
        stories: state.stories.map( story => {
          return story.id === action.payload.id ? action.payload : story;
        })
      }
    case REJECT_STORY:
      return {
        ...state,
        stories: state.stories.filter( story => {
          return story.id !== action.payload
        })
      }
    default:
      return {
        ...state
      }
  }
}

// const story = {
//   author: '', //optional
//   email: '',
//   title: '', //optional
//   text: '',
//   id: '',
//   approved: false,
// }

