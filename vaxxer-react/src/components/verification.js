import React, { Component } from 'react';
import web3 from '../web3';
import vaxxer from '../vaxxer';
import { Container, Loader, Segment, Dimmer, Image } from 'semantic-ui-react';

class Verification extends Component {
  componentDidMount() {
    this.loadRecord();
  }

  async loadRecord() {
    const address = window.location.href.substring(window.location.href.indexOf('0x'));
    const accounts = web3.eth.getAccounts();
    const inSystem = await vaxxer.methods.inSystem(address).call();
    if(inSystem){
      const fullyVaxxed = await vaxxer.methods.fullyVaxxed(address).call();
      const record = await vaxxer.methods.records(address).call();
      const first = record[0];
      const last = record[1];
      const dob = record[3];
      this.setState({first, last, dob, fullyVaxxed, inSystem, loading:false});
    }
  }

  state={
    first: '',
    last: '',
    dob: '',
    fullyVaxxed: false,
    inSystem: false,
    loading: true,
  }

  render() {
    return(
      <div class='verification'>
          <Dimmer active={this.state.loading} inverted>
            <Loader size='massive' indeterminate>Getting vaccination info...</Loader>
          </Dimmer>
          <Container textAlign="center">
            <h2>{this.state.first} {this.state.last}</h2>
            <h3>Birthdate: {`${this.state.dob.substring(0,2)}/${this.state.dob.substring(2,4)}/${this.state.dob.substring(4)}`}</h3>
            <h2 hidden={!(this.state.fullyVaxxed)}>Vaccinated</h2>
            <h2 hidden={!((!this.state.fullyVaxxed)&&(this.state.inSystem))}>Not Fully Vaccinated</h2>
            <h2 hidden={(this.state.inSystem)}>No Records Found</h2>
          </Container>


      </div>
    )
  }
}

export default Verification;
