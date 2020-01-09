import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions';

const initialState = {
  credentials: null,
  isFetching: false,
  error: '',
  isLoggedIn: false,
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
          error: '',
          isFetching: false,
          isLoggedIn: true,
        }
      case LOGIN_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
          isLoggedIn: false,
        }
      default:
        return state;
  }
}
