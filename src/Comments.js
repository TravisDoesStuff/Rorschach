import React, { Component } from 'react';
import data from './data.js';

class Comments extends Component {
  render() {
    return (
      <div className="CommentsBox">
        <hr />
        {data.map(data =>
          <div>
            <h3>{ data.name }</h3>
            <p>{ data.text }</p>
            <hr />
          </div>
        )}
      </div>
    );
  }
}

export default Comments;
