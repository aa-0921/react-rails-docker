import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { DropZone } from '../components/DropZone';
import { FormikPost } from '../components/FormikPost';

export const Posts = () => {
  const [hasError, setErrors] = useState(false);
  const [posts, setPosts] = useState([]);
  const url: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;

  if (process.env.NODE_ENV !== 'production') {
    console.log('url:', url);
  }
  useEffect(() => {
    FetchData(url).then((res) => setPosts(res));
  }, []);
  return (
    <div>
      {/* <span>{JSON.stringify(posts)}</span> */}
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
      <DropZone />
      <FormikPost />
    </div>
  );
};
