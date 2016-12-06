import React, { Component } from 'react';

export default class Social extends Component {
  render() {
    require('./Social.css');

    return (
    <div className="social">
      <ul>
        <li><a href="https://github.com/zurfyx" target="_blank"><i className="fa fa-github"></i></a></li>
      </ul>
    </div>
    );
  }
}