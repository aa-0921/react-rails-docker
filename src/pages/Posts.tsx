export const Posts = () => {
  return fetch(process.env.REACT_APP_API_URL_ALL_POST_DATA, {
    method: 'get',
  });
};
