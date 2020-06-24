require('dotenv').config();
import React from 'react';
import { Post } from './Post';
import { Spacer } from '@zeit-ui/react';

export const PostList = (props: any): any => {
  return (
    <>
      <Spacer y={1.5} />
      <div>
        {props.fetchPosts.map((post: any) => (
          <Post
            post={post}
            // followUsersList={props.followUsers}
            // pushToFollowUsers={props.pushToFollowUsers}
            // removeFromFollowUsers={props.removeFromFollowUsers}
          />
        ))}
      </div>
    </>
  );
};
