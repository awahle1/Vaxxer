import './App.css';
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Owner from './components/owner';
import Patient from './components/patient';
import Validator from './components/validator';
import NavButtons from './components/navButtons';

class App extends Component{
  // constructor(){
  //   super();
  //
  //   this.state = {
  //     onMain: 'true'
  //   };
  //
  //   this.hideButtons = this.hideButtons.bind(this)
  // }
  //
  //
  // hideButtons() {
  //   this.setState({ onMain:'false' });
  // };

  render(){
    return (

      <div>
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
