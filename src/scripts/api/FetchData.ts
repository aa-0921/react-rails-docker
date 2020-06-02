// import React, { useState, useEffect } from 'react';
// const [hasError, setErrors] = useState(false);
// const [posts, setPosts] = useState({});

export async function FetchData() {
  const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
  console.log(url);
  const res = await fetch(url);
  // .then((res) => res)
  // .then((res) => setPosts(res))
  // .catch((err) => setErrors(err));
  return await res.json();
}

// import React, { useState, useEffect } from 'react';
// const [hasError, setErrors] = useState(false);
// const [posts, setPosts] = useState({});

// export async function FetchData() {
//   const url: string = process.env.REACT_APP_API_URL_POST_DATAS!;
//   const res = await fetch(url);
//   const resBody = fetch.body;
//   // .then((res) => res)
//   // .then((res) => setPosts(res))
//   // .catch((err) => setErrors(err));
//   return resBody;
// }
