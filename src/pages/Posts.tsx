export const Posts = (): Promise<T> => {
  const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
  return fetch(url, {
    method: 'get',
  });
};


function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json<T>()
    })
