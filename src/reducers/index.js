import { combineReducers } from 'redux';
// Import all reducer files here
import { storyReducer } from './storyReducer';


const allReducers = combineReducers({
// key: value pairs here
  storyState: storyReducer,
});

export default allReducers;