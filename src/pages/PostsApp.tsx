import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { DropZone } from '../components/DropZone';
import { FormikPost } from '../components/FormikPost';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';

export const PostsApp = () => {
  const [hasError, setErrors] = useState(false);
  const [fetchPosts, setFetchPosts] = useState([]);
  const url: string = process.env.REACT_APP_API_URL_ALL_POST_DATAS!;

  if (process.env.NODE_ENV !== 'production') {
    console.log('url:', url);
  }
  useEffect(() => {
    FetchData(url).then((res) => setFetchPosts(res.data));
  }, []);
  return (
    <>
      <Router>
        <div>
          {/* <Show /> */}

          <div>
            <span>
              <PostList
                fetchPosts={fetchPosts}
                // followUsers={followUsers}
                // pushToFollowUsers={pushToFollowUsers}
                // removeFromFollowUsers={removeFromFollowUsers}
              />
            </span>
            {/* <span>{JSON.stringify(fetchPosts)}</span> */}

            {/* <hr /> */}
            {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
            {/* <DropZone /> */}
            {/* <FormikPost /> */}
          </div>
          <Switch>
            {/* <Route path="/post/:id" component={Show} /> */}
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
