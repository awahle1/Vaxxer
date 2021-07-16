import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavButtons extends Component {
  render() {
    return(
      <div>
      <Container textAlign='center'
        style={{paddingTop: '30px', color: '#FFFFFF'}}
        >
        <h2>Vaxxer</h2>
        <div style={{paddingTop: '10px'}}>
          <Button as={Link} to='/owner' content='Owner' inverted color='white'/>
        </div>
        <div style={{paddingTop: '20px'}}>
          <Button as={Link} to='/patient' content='Patient' inverted color='white'/>
        </div>
        <div style={{paddingTop: '20px'}}>
          <Button as={Link} to='/validator' content='Validator' inverted color='white'/>
        </div>
      </Container>



      </div>
    )
  }
}

export default NavButtons;
