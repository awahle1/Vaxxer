import './App.css';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Web3 from 'web3';

import Owner from './components/owner';
import Patient from './components/patient';
import Validator from './components/validator';
import NavButtons from './components/navButtons';
import { VAXXER_ABI, VAXXER_ADDRESS } from './config';

class App extends Component{
  componentWillMount() {
      this.loadBlockchainData()
    }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:3000");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const vaxxer = new web3.eth.Contract(VAXXER_ABI, VAXXER_ADDRESS);
    this.setState({ vaxxer });
    const owner = await vaxxer.methods.owner().call();
    this.setState({ owner });
    console.log(owner);
    }

  constructor(props){
    super(props);
    this.state = {
      account: '',
      owner: ''
    };
  }

  render(){
    return (
      <div>
        <h3>{this.state.owner}</h3>
        <BrowserRouter>
          <Switch>
            <Route path="/owner">
              <Owner />
            </Route>
            <Route path="/patient">
              <Patient />
            </Route>
            <Route path="/validator">
              <Validator />
            </Route>
            <Route path="/">
              <NavButtons />
            </Route>
          </Switch>



        </BrowserRouter>
      </div>
    );
  }
}

export default App;
//
