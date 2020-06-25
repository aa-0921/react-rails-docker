import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { DropZone } from '../components/DropZone';
import { FormikPost } from '../components/FormikPost';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';

import { Modal, Button } from '@zeit-ui/react';

export const PostsApp = () => {
  const [fetchPosts, setFetchPosts] = useState([]);
  const [likeList, setLikeList] = useState<number[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = () => setModalOpen(true);
  const closeHandler = () => {
    setModalOpen(false);
    console.log('modal-closed');
  };

  // 開発時点ではログイン処理を飛ばしている為、ID1で固定。後々修正
  const currentUserId = 1;
  const getLikeListUrl: string =
    process.env.REACT_APP_API_URL_POSTS + '/like_list/' + currentUserId;
  useEffect(() => {
    FetchData(getLikeListUrl).then((res) => {
      setLikeList(res.data.map((like: any) => like.id));
    });
  }, []);

  const pushToLikeList = (picpost_id: number) => {
    console.log(picpost_id, 'ma');
    const arr = Array.from(likeList);
    arr.push(picpost_id);
    setLikeList(arr);
  };

  const removeFromLikeList = (picpost_id: number) => {
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
                pushToLikeList={pushToLikeList}
                removeFromLikeList={removeFromLikeList}
                modalOpenHandler={modalOpenHandler}
              />
            </span>
            <Modal open={modalOpen} onClose={closeHandler}>
              <Modal.Title>Modal</Modal.Title>
              <Modal.Subtitle>This is a modal</Modal.Subtitle>
              <Modal.Content>
                <p>Some content contained within the modal.</p>
              </Modal.Content>
              <Modal.Action passive onClick={() => setModalOpen(false)}>
                Cancel
              </Modal.Action>
              {/* <Modal.Action>Submit</Modal.Action> */}
            </Modal>
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
