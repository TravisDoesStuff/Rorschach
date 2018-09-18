import React, { Component } from 'react';

class InkBlot extends Component {
  render() {
    let inkId = this.props.inkId+"";
    if(inkId.length < 2){
      inkId = "0"+inkId;
    }

    let fileName = 'blot'+inkId+'.jpg';
    return (
      <img src={`images/${fileName}`} className="Image-inkBlot" alt="inkBlot" />
    );
  }
}

export default InkBlot;
