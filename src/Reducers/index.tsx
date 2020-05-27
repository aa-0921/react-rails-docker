import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fetchPostData from './Post';

const rootReducer = combineReducers({
  form: formReducer,
  fetchPostData,
});

export default rootReducer;
