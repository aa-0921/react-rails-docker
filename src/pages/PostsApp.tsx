import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { DropZone } from '../components/DropZone';
import { FormikPost } from '../components/FormikPost';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';

export const PostsApp = () => {
  const [fetchPosts, setFetchPosts] = useState([]);
  const [likeList, setLikeList] = useState<number[]>([]);

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = 1;
  const getLikeListUrl: string =
    process.env.REACT_APP_API_URL_USERS + '/like_list/' + currentUserId;
  useEffect(() => {
    FetchData(getLikeListUrl).then((res) => {
      setLikeList(res.data.map((like: any) => like.id));
    });
  }, []);

  const pushToLikelist = (picpost_id: number) => {
    console.log(picpost_id, 'ma');
    const arr = Array.from(likeList);
    arr.push(picpost_id);
    setLikeList(arr);
  };

  const removeFromLikelist = (picpost_id: number) => {
    const arr = Array.from(likeList);
    const nextFollowUsers = arr.filter((el) => el !== picpost_id);
    setLikeList(nextFollowUsers);
  };

  const getAllPostUrl: string = process.env.REACT_APP_API_URL_POSTS!;

  console.log('getAllPostUrl:', getAllPostUrl);

  useEffect(() => {
    FetchData(getAllPostUrl).then((res) => setFetchPosts(res.data));
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
                likeList={likeList}
                pushToLikelist={pushToLikelist}
                removeFromLikelist={removeFromLikelist}
              />
            </span>
            {/* <span>{JSON.stringify(fetchPosts)}</span> */}

            <hr />
            <hr />
            <hr />

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
