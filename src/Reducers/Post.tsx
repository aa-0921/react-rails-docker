import { REQUEST_FETCH, SUCCEEDED_FETCH, FAILED_FETCH } from '../actions';

const initialState = {
  fetching: false,
  todoText: [],
  error: null,
};

const fetchPostData = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return { ...state, fetching: true, error: null };
    case SUCCEEDED_FETCH:
      return { ...state, fetching: false, todoText: action.payload.data };
    case FAILED_FETCH:
      return { ...state, fetching: false, todoText: null, error: action.error };
    default:
      return state;
  }
};

export default fetchPostData;
