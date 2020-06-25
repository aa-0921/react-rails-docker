import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';
import User from '../components/User';

import { Modal, Button, Grid, Divider } from '@zeit-ui/react';

require('dotenv').config();

import * as Icon from '@zeit-ui/react-icons';

export const PostsApp = () => {
  const [fetchPosts, setFetchPosts] = useState([]);
  const [likeList, setLikeList] = useState<number[]>([]);
  const [clickedPost, setClickedPost] = useState({
    id: 0,
    picture: '',
    content: '',
  });

  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = (post: any) => {
    setClickedPost(post);
    console.log('post: ', clickedPost.id);
    console.log('post: ', clickedPost.picture);

    setModalOpen(true);
  };
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

  // clickLike,unlike
  const onClickLike = async (postId: any) => {
    const obj = {
      current_user_id: User.get('currentUserId'),
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/like/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          console.log('response.status:200???: ', response.status);

          pushToLikeList(clickedPost.id);
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.log('投稿失敗');
          }
          throw new Error();
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('投稿失敗');
        }
      });
  };
  const onClickUnLike = async (postId: any) => {
    const obj = {
      current_user_id: User.get('currentUserId'),
    };

    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_POSTS + '/unlike/' + postId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          removeFromLikeList(clickedPost.id);
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.log('投稿失敗');
          }
          throw new Error();
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('投稿失敗');
        }
      });
  };
  // clickLike,unlike

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
            <Modal width="35rem" open={modalOpen} onClose={closeHandler}>
              <>
                <Modal.Title>{clickedPost.id}</Modal.Title>
                {/* <Modal.Title>modal-title</Modal.Title> */}

                <Modal.Subtitle>{clickedPost.content}</Modal.Subtitle>
                <Grid.Container justify="center">
                  <Grid>
                    <Modal.Content>
                      <div className=" flex flex-col items-center">
                        <img src={clickedPost.picture} className="rounded-lg" />
                        <Divider />
                        <div className="flex-1  text-center">
                          {/* <li key={clickedPost.id} className="flex items-center m-auto"> */}
                          <Link to={'/profilepage/' + clickedPost.id}>
                            post_id__{clickedPost.id} &emsp;
                            {clickedPost.content}&emsp;
                          </Link>

                          {likeList.includes(clickedPost.id) ? (
                            <Button
                              type="warning"
                              size="mini"
                              auto
                              ghost
                              onClick={() => onClickUnLike(clickedPost.id)}
                              // className="m-auto transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
                            >
                              <Icon.HeartFill size={12} />
                              UnLike
                            </Button>
                          ) : (
                            <Button
                              type="success"
                              size="mini"
                              auto
                              ghost
                              onClick={() => onClickLike(clickedPost.id)}
                              // className="m-auto transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110"
                            >
                              <Icon.Heart size={8} />
                              Like
                            </Button>
                          )}
                          {/* </li>{' '} */}
                        </div>
                      </div>
                    </Modal.Content>
                  </Grid>
                </Grid.Container>
                <Modal.Action passive onClick={() => setModalOpen(false)}>
                  Cancel
                </Modal.Action>
                {/* <Modal.Action>Submit</Modal.Action> */}
              </>
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
