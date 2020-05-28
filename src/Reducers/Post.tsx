import { REQUEST_FETCH, SUCCEEDED_FETCH, FAILED_FETCH } from '../actions';
import { requestFetch, succeededFetch, failedFetch } from '../actions';

type Actions =
  | ReturnType<typeof requestFetch>
  | ReturnType<typeof succeededFetch>
  | ReturnType<typeof failedFetch>;

const initialState = {
  fetching: false,
  todoText: [],
  error: null,
};

export const fetchPostData = (state = initialState, action: Actions) => {
  switch (action.type) {
    case REQUEST_FETCH:
      return { ...state, fetching: true, error: null };
    case SUCCEEDED_FETCH:
      return { ...state, fetching: false, postText: action.payload.data };
    case FAILED_FETCH:
      return { ...state, fetching: false, postText: null, error: action.error };
    default:
      return state;
  }
};
