import React, { Component } from 'react';
import { Form, Message, Container } from 'semantic-ui-react';
import web3 from '../web3';
import vaxxer from '../vaxxer';
import '../App.css'

class Owner extends Component {
  state = {
    message: '',
    errorMessage: '',
    loading: false,
    address: ''
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ message: 'Adding Validator...', loading:true, errorMessage: '' });

    try{
      const accounts = await web3.eth.getAccounts();

      await vaxxer.methods.addValidator(
        this.state.address
      ).send({
        from: accounts[0]
      });

      this.setState({ message: 'Successfully added validator' });
      window.location.reload();
    } catch (err) {
      this.setState({ errorMessage: err.message, message:'' });
    }

    this.setState({loading: false});
  };

  render() {
    return(
      <div class='owner-div'>
        <Container>
          <h2>Add a Validator</h2>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Group widths='equal'>
              <Form.Field>
                <label style={{color:'white'}}>New Validator Address</label>
                <input class='input-group' placeholder='address' value={this.state.address} onChange={event => this.setState({ address: event.target.value })}/>
              </Form.Field>
            </Form.Group>
            <Message positive content={this.state.message} hidden={!(this.state.message)}/>
            <Message error header="Unable to Add Record" content={this.state.errorMessage} />
            <Form.Button disabled={!(web3.utils.isAddress(this.state.address))} inverted color='white' loading={this.state.loading}>Submit</Form.Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Owner;
