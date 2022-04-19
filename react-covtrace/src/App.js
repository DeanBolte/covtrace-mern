import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";

import Home from './components/Home';
import Info from './components/Info';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Header from "./components/Header";

function App() {

  return (
    <Router>
      <div className="container">
        <Header />

        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/info"} component={Info} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/register"} component={Register} />
          <Route exact path={"/admin"} component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;