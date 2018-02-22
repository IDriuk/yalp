import React, { Component } from 'react';
import './Spinner.css';

class Spinner extends Component {
  render () {
    return (
      <div className="circle-spinner inline-block">
        <div className="circle-spinner_segment container1">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="circle-spinner_segment container2">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="circle-spinner_segment container3">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
      </div>
    );
  }
}

export default Spinner;
