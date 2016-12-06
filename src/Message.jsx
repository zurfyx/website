import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);

    this.emailAddress = this.emailAddress.bind(this);
  }

  emailAddress() {
    // Email obfuscator script 2.1 by Tim Williams, University of Arizona
    // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
    // This code is freeware provided these four comment lines remain intact
    // A wizard to generate this code is at http://www.jottings.com/obfuscator/
    const coded = "MsKnhv@GOFY7.jEO";
    const key = "GdkuWy3OH6f8Sjva05qszhp9XJnrZU1FiLboMACTDIBKRlg4YweEPm2QVNtcx7";
    const shift=coded.length;
    let link="";
    for (let i=0; i<coded.length; i++) {
      if (key.indexOf(coded.charAt(i))===-1) {
        const ltr = coded.charAt(i);
        link += (ltr)
      }
      else {
        const ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
        link += (key.charAt(ltr));
      }
    }
    return link;
  }

  render() {
    require('./Message.css');

    return (
      <a className="message" href={`mailto:${this.emailAddress()}`} target="_blank">Message me</a>
    )
  }
}

