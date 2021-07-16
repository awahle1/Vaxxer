import React, { Component } from 'react';
import { Form, Message, Container } from 'semantic-ui-react';
import vaxxer from '../vaxxer';
import web3 from '../web3.js';

class Validator extends Component {
  state = {
    firstName: '',
    lastName: '',
    dob: '',
    brand: '',
    doseId: '',
    address: '',

    message: '',
    errorMessage: '',
    loading: false
  }

  onSubmit = async event => {
    event.preventDefault();
    let dob = this.state.dob;
    if(!((dob.length==10)&&(dob[2]==='/'&&dob[5]=='/')&&(parseInt(dob.substring(0,2))<=12)&&(parseInt(dob.substring(3,5))<=31)&&(parseInt(dob.substring(6))<=2021))){
      this.setState({errorMessage: 'Birthdate must be in MM/DD/YYYY format'});
    }else{
      dob = dob.replaceAll('/', '');
      this.setState({ message: 'Writing data to the blockcahin. This may take a minute...', loading:true, errorMessage: '' });

      try{
        const accounts = await web3.eth.getAccounts();

        await vaxxer.methods.addRecord(
          this.state.firstName,
          this.state.lastName,
          this.state.brand,
          this.state.doseId,
          dob,
          this.state.address
        ).send({
          from: accounts[0]
        });

        this.setState({ message: 'Successfully added record' });
        window.location.reload();
      } catch (err) {
        this.setState({ errorMessage: err.message, message:'' });
      }

      this.setState({loading: false});
    }


  };

  render() {
    return(
      <div>
      <Container
        style={{paddingTop: '30px', color: '#FFFFFF'}}
        >
        <h2>Enter a New Vaccination Record</h2>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Group widths='equal'>
            <Form.Input
              fluid label='First name'
              placeholder='First name'
              value={this.state.firstName}
              onChange={event => this.setState({ firstName: event.target.value })}
            />
            <Form.Input
              fluid label='Last name'
              placeholder='Last name'
              value={this.state.lastName}
              onChange={event => this.setState({ lastName: event.target.value })}
            />
            <Form.Input
              fluid label='Birthdate'
              placeholder='MM/DD/YYYY'
              value={this.state.dob}
              onChange={event => this.setState({ dob: event.target.value })}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              fluid label='Brand'
              placeholder='Brand'
              value={this.state.brand}
              onChange={event => this.setState({ brand: event.target.value })}
            />
            <Form.Input
              fluid label='Dose ID'
              placeholder='AA0000'
              value={this.state.doseId}
              onChange={event => this.setState({ doseId: event.target.value })}
            />
            <Form.Input
              fluid label={'Patient\'s Wallet Address'}
              placeholder='address'
              value={this.state.address}
              onChange={event => this.setState({ address: event.target.value })}
            />
          </Form.Group>
          <Message positive content={this.state.message} hidden={!(this.state.message)}/>
          <Message error header="Unable to Add Record" content={this.state.errorMessage} />
          <Form.Button
            inverted
            color="white"
            disabled={
              !((web3.utils.isAddress(this.state.address))
              &&(!!(this.state.firstName))
              &&(!!(this.state.lastName))
              &&(!!(this.state.brand))
              &&(!!(this.state.dob))
              &&(!!(this.state.doseId)))
            }
            loading={this.state.loading}>
              Submit
          </Form.Button>
        </Form>
      </Container>
      </div>
    )
  }
}

export default Validator;
