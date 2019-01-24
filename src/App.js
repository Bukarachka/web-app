import React, { Component } from 'react';
import store from './config/store';
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Popular from "./Views/Popular";
import Similar from "./Views/Similar";

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
          <HashRouter>
              <Switch>
                  <Route exact path="/" name="Popular" component={Popular}/>
                  <Route exact path="/popular" name="Popular" component={Popular}/>
                  <Route exact path="/similar" name="Similar" component={Similar}/>
              </Switch>
          </HashRouter>
      </Provider>
    );
  }
}

export default App;
