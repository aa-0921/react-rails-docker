// import axios from 'axios';

export default function fetchPostData() {
  return fetch('http://localhost:8000/post_datas/${id}', {
    method: 'get',
  });
}
