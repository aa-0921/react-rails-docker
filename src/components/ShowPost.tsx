import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestFetch, requestDelete } from '../actions';

class ShowPost extends Component {
  componentDidMount() {
    this.props.requestFetch();
  }

  render() {
    const datas = this.props.postText.fetchPostData.postText;
    return (
      <div>
        {datas.map((data: any) => {
          return (
            <div key={data.id}>
              {data.text}
              <span onClick={() => this.props.requestDelete(data.id)}>x</span>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  requestFetch: () => dispatch(requestFetch()),
  requestDelete: (data: any) => dispatch(requestDelete(data)),
});
const mapStateToProps = (state: any) => ({
  postText: state,
});
export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);
