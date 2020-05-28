// import axios from 'axios';

export default function deletePostData(id: any) {
  return fetch(process.env.REACT_APP_API_URL_POST_DATAS + '/${id}', {
    method: 'delete',
  });
}
