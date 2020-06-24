require('dotenv').config();
import React from 'react';
import { List } from '../components/List';
import { Spacer } from '@zeit-ui/react';

export const MemberList = (props: any): any => {
  return (
    <>
      <Spacer y={1.5} />
      <div>
        {props.fetchUsers.map((user: any) => (
          <List
            user={user}
            followUsersList={props.followUsers}
            pushToFollowUsers={props.pushToFollowUsers}
            removeFromFollowUsers={props.removeFromFollowUsers}
          />
        ))}
      </div>
    </>
  );
};
