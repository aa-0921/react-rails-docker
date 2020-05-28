// import axios from 'axios';

export default function fetchPostData() {
  return fetch(process.env.REACT_APP_API_URL_POST_DATAS + '/${id}', {
    method: 'get',
  });
}
