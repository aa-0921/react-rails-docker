// import axios from 'axios';

export default function fetchPostData(id: any) {
  return fetch('http://localhost:8000/post_datas/${id}', {
    method: 'delete',
  });
}
