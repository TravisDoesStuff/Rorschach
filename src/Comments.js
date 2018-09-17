import React, { Component } from 'react';
import data from './data.js';

class Comments extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch('/api/comments/:inkId')
      .then(data => data.json())
      .then((res) => {
        this.setState({ data: res.data });
      })
  }

  render() {
    return (
      <div className="CommentsBox">
        <hr />
        {data.map(comment =>
          <div>
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
