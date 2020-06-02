// export function Posts<T>(): Promise<T> {
//   const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
//   return fetch(url, {
//     method: 'get',
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json() as Promise<T>;
//   });
// }

// import React, { useState, useEffect } from 'react';

// export const Posts = (): void => {
//   // const [hasError, setErrors] = useState(false);

//   (async function () {
//     const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;

//     const res = await fetch(url);
//     await res.json();
//     console.log(res);
//   });
// };

import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';

export const Posts = () => {
  const [hasError, setErrors] = useState(false);
  const [posts, setPosts] = useState({});
  const url: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;

  useEffect(() => {
    FetchData(url).then((res) => setPosts(res));
  }, []);
  return (
    <div>
      <span>{JSON.stringify(posts)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
