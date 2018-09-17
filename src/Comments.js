import React, { Component } from 'react';

class Comments extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentWillMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    let inkId = this.props.inkId
    fetch('/api/comments/'+inkId)
      .then(data => data.json())
      .then((res) => {
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div className="CommentsBox">
        <hr />
        {this.state.data.map(comment =>
          <div key={comment._id}>
            <h3>{ comment.name }</h3>
            <p>{ comment.text }</p>
            <hr />
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
