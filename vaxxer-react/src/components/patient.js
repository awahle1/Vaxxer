import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class Patient extends Component {
  render() {
    return(
      <div style={{color:'white', paddingTop:'10px'}}>
        <Container textAlign="center">
          <h2>Scan with an Ethereum connected device to verify vaccination status:</h2>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=FFFFFF&bgcolor=58A8C1&data=http://localhost:3000/${this.props.address}`}></img>
        </Container>
      </div>

    )
  }
}

export default Patient;
