import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LoginSignup } from './features/auth/LoginSignup';
import { Dashboard } from './features/dashboard/Dashboard';
import AuthRoute from './features/auth/AuthRoute';
import { Sandbox } from './features/sandbox/Sandbox';
import Farewell from './Farewell'
import 'antd/dist/antd.css';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Farewell />
        </Route>
        <Route exact path="/login">
          <LoginSignup />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/sandbox">
          <Sandbox />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
