import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">

          <NavLink exact activeClassName="active" to="/">Home</NavLink>         
          <NavLink activeClassName="active" to="/components/about">About</NavLink>
          <NavLink activeClassName="active" to="/components/login">Login</NavLink>
          <NavLink activeClassName="active" to="/components/dashboard">Dashboard</NavLink> 

        </div>
        <div className="content">

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/components/about" component={About}/>
            <PublicRoute path="/components/login" component={Login}/>
            <PrivateRoute path="/components/dashboard" component={Dashboard}/>
            {/* <Route path="/components/login" component={Login}/> */}
            {/* <Route path="/components/dashboard" component={Dashboard}/> */}
          </Switch>
        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
