import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavButtons extends Component {
  render() {
    return(
      <div>
        <Button as={Link} to='/owner' content='Owner' secondary/>
        <Button as={Link} to='/patient' content='Patient' primary />
        <Button as={Link} to='/validator' content='Validator' secondary/>

      </div>
    )
  }
}

export default NavButtons;
