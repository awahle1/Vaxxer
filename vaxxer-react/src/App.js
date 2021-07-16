import './App.css';
import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import web3 from './web3';

import Owner from './components/owner';
import Patient from './components/patient';
import Validator from './components/validator';
import NavButtons from './components/navButtons';
import Verification from './components/verification';

class App extends Component{
  componentDidMount() {
      document.body.style.backgroundColor = "#58A8C1"
      this.loadBlockchainData();
    }

  async loadBlockchainData() {
    const accounts = await web3.eth.getAccounts();
    this.setState({ address: accounts[0] });
    }

  constructor(props){
    super(props);
    this.state = {
      address: '',
    };
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/owner">
              <Owner />
            </Route>
            <Route path="/patient">
              <Patient address={this.state.address}/>
            </Route>
            <Route path="/validator">
              <Validator />
            </Route>
            <Route path="/:address">
              <Verification />
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
