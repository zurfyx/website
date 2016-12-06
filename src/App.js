import React, { Component } from 'react';

import Message from './Message';
import Social from './Social';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weak: '',
      strong: '<Gerard Rovira>',
      showHeader: false,
      showSocial: false,
      showMessage: false,
    };

    this.say = this.say.bind(this);
    this.sayWeak = this.sayWeak.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);
    this.toggleSocial = this.toggleSocial.bind(this);
    this.toggleMessage = this.toggleMessage.bind(this);
    this.timeout = this.timeout.bind(this);
  }

  componentDidMount() {
    return this.timeout(1000)
      .then(() => this.toggleHeader())
      .then(() => this.say('HELLO'))
      .then(() => this.timeout(1500))
      .then(() => this.sayWeak('This site is'))
      .then(() => this.timeout(200))
      .then(() => this.say('Coming soon', 140))
      .then(() => this.timeout(1200))
      .then(() => {
        this.toggleSocial();
        this.toggleMessage();
      });
  }

  say(text, timeout=200, i=0) {
    return new Promise((resolve) => {
      const updater = setInterval(() => {
        this.setState({ strong: `${text.slice(0, ++i)}` });
        if (text.length < i) {
          clearInterval(updater);
          resolve();
        }
      }, timeout);
    });
  }

  sayWeak(text) {
    return this.setState({ weak: text });
  }

  timeout(timeout=200) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), timeout);
    });
  }

  toggleHeader() {
    return this.setState({ showHeader: !this.state.showHeader });
  }

  toggleSocial() {
    return this.setState({ showSocial: !this.state.showSocial });
  }

  toggleMessage() {
    return this.setState({ showMessage: !this.state.showMessage });
  }

  render() {
    require('./App.css');
    const { weak, strong, showHeader, showSocial, showMessage } = this.state;

    return (
      <div className="App">
        {showHeader && <h1 className="tiny-header">Gerard Rovira - 2016</h1>}
        {showMessage && <Message />}
        <div className="center">
          {weak && <span className="weak">{weak}</span>}
          <span className="huge">{strong}</span>
          {showSocial && <Social />}
        </div>
      </div>
    );
  }
}

export default App;
