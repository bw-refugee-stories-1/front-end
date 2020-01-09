import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  credentials: null,
  isFetching: false,
  error: '',
};

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        isFetching: true,
        credentials: action.payload,
        error: '',
      }
      case LOGIN_SUCCESS:
        return {
          ...state,
          isFetching: true,
          error: '',
        }
      case LOGIN_FAILURE:
        return {
          ...state,
          isFetching: true,
          error: action.payload
        }
      default:
        return state;
  }
}
