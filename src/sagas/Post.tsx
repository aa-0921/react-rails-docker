import { put, call } from 'redux-saga/effects';
import {
  succeededFetch,
  failedFetch,
  // succeededCreate,
  // failedCreate,
  succeededDelete,
  failedDelete,
} from '../actions';
import fetchPostData from './Api/FetchPostData';
import deletePostData from './Api/DeletePostData';
// import createPostData from './Api/CreatePostData';

export function* fetchData() {
  try {
    const payload = yield call(fetchPostData);
    yield put(succeededFetch(payload));
  } catch (e) {
    yield put(failedFetch(e.message));
  }
}

export function* deleteData(action: any) {
  const PostId = action.data;
  const responseData = yield call(deletePostData, PostId);
  if (responseData) {
    yield put(succeededDelete(responseData.data));
  } else {
    yield put(failedDelete('エラー'));
  }
}

// export function* createData(action) {
//   const textData = action.PostText.location;
//   const responseData = yield call(createPostData, textData);
//   if (responseData) {
//     yield put(succeededCreate(responseData.data));
//   } else {
//     yield put(failedCreate('エラー'));
//   }
// }
