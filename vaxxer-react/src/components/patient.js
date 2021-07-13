import React, { Component } from 'react';

class Patient extends Component {
  render() {
    return(
      <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=http://localhost:3000/${this.props.address}`}></img>
    )
  }
}

export default Patient;
