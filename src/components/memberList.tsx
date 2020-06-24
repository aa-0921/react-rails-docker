require("dotenv").config();
import React from "react";
import { List } from "../components/List";

export const MemberList = (props: any): any => {

  return (
    <div>
      {props.fetchUsers.map((user: any) => (
        <List user={user} followUsersList={props.followUsers} pushToFollowUsers={props.pushToFollowUsers} removeFromFollowUsers={props.removeFromFollowUsers} />
      ))}
    </div>
  );
};
