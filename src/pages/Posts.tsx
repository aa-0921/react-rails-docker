export const Posts = () => {
  const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
  return fetch(url, {
    method: 'get',
  });
};
