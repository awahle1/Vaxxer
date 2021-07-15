import React, { Component } from 'react';
import web3 from '../web3';
import vaxxer from '../vaxxer';

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
      this.setState({first, last, dob, fullyVaxxed, inSystem});
    }
  }

  state={
    first: '',
    last: '',
    dob: '',
    fullyVaxxed: false,
    inSystem: false,
  }

  render() {
    return(
      <div>
        <h3>{this.state.first} {this.state.last}</h3>
        <h4>{this.state.dob}</h4>
        <h3 hidden={!(this.state.fullyVaxxed)}>Vaccinated</h3>
        <h3 hidden={!((!this.state.fullyVaxxed)&&(this.state.inSystem))}>Not Fully Vaccinated</h3>
        <h3 hidden={(this.state.inSystem)}>No Records Found</h3>
      </div>
    )
  }
}

export default Verification;
