import { REQUEST_FETCH, SUCCEEDED_FETCH, FAILED_FETCH } from '../actions';
import { requestFetch, succeededFetch, failedFetch } from '../actions';

type Actions =
  | ReturnType<typeof requestFetch>
  | ReturnType<typeof succeededFetch>
  | ReturnType<typeof failedFetch>;

const initialState = {
  fetching: false,
  postText: [],
  error: null,
};

interface FetchPostDataState {
  postText: PostText[];
  payloadOBj: PayloadObj[];
}

interface PayloadObj {
  data: string[];
}

export const fetchPostData = (state: FetchPostDataState = initialState, action: Actions) => {
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
