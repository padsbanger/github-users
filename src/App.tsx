import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users/Users";
import User from "./User/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/search" component={Users} />
          <Route path="/users/:id" component={User} />
          <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
