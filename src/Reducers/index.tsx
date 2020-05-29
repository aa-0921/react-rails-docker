import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import fetchPostData from './Post';
// import { fetchPostData } from '/Users/aa/projects/sugomori-frontend/src/Reducers/Post';
import { fetchPostData } from './Post';

const rootReducer = combineReducers({
  form: formReducer,
  fetchPostData,
});

export default rootReducer;
