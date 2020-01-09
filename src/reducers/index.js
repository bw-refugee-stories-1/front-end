import { combineReducers } from 'redux';
// Import all reducer files here
import { storyReducer } from './storyReducer';
import { loginReducer } from './loginReducer';


const allReducers = combineReducers({
// key: value pairs here
  storyState: storyReducer,
  loginState: loginReducer,
});

export default allReducers;