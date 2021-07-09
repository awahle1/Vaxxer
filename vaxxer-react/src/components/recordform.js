import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class RecordForm extends Component {
  render() {
    return(
      <>
        <h3>Enter a New Vaccination Record</h3>
        <Form>
          <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Input fluid label='Birthdate' placeholder='MM/DD/YYYY' />
          </Form.Group>
          <Form.Group widths='equal'>
          <Form.Input fluid label='Brand' placeholder='Brand' />
          <Form.Input fluid label='Dose ID' placeholder='AA0000' />
          <Form.Input fluid label={'Patient\'s Wallet Address'} placeholder='address' />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

export default RecordForm;
