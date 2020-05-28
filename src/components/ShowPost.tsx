import * as React from 'react';
import { useEffect } from 'react';

import { connect } from 'react-redux';
import { requestFetch, requestDelete } from '../actions';

interface ShowPostProps {
  text: string[];
  postText: { fetchPostData: { postText: string[] }; key: string[] };
  fetchPostData: string;
  requestFetch: () => void;
  requestDelete: (arg: number) => void;
  mapDispatchToProps: () => void;
}

interface data {
  text: string;
  id: number;
}

export const ShowPost = (props: ShowPostProps): void => {
  useEffect(() => {
    props.requestFetch();
    const datas = props.postText.fetchPostData.postText;
    return () => {
      <div>
        {datas.map((data: data) => {
          return (
            <div key={data.id}>
              {data.text}
              <span onClick={() => props.requestDelete(data.id)}>x</span>
            </div>
          );
        })}
      </div>;
    };
  });
};

// export const mapDispatchToProps = (dispatch) => ({
//   requestFetch: () => dispatch(requestFetch()),
//   requestDelete: (data: any) => dispatch(requestDelete(data)),
// });
// export const mapStateToProps = (state) => ({
//   postText: state,
// });
