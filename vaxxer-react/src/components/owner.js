import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Owner extends Component {
  render() {
    return(
      <>
        <h3>Add a Validator</h3>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Validator Address' placeholder='address' />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

export default Owner;
