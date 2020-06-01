import React, { useState, useEffect } from 'react';

export const Posts = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://swapi.co/api/planets/4/');
      res
        .json()
        .then((res) => setPlanets(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

// export function Posts(): Response {
// export const Posts = async () => {
// export function Posts<T>(): Promise<T> {

//   const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
//   return await fetch(url, {
//     method: 'get',
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     // return response.json() as Promise<T>;
//     return response.json();
//   });
// };

// export const Posts = () => {
//   const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
//   return fetch(url, {
//     method: 'get',
//   });
// };
