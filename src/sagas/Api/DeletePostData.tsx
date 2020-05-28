// import axios from 'axios';

export default function deletePostData(id: any) {
  return fetch('http://localhost:8000/post_datas/${id}', {
    method: 'delete',
  });
}
