import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Users from "./Users/Users";
import User from "./User/User";
import Search from "./Search/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      margin: theme.spacing(2)
    },
    link: {
      color: "white",
      textDecoration: "none"
    }
  })
);

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <NavLink
              exact
              className={classes.link}
              to="/"
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "2px solid white"
              }}
            >
              <Typography variant="h6" className={classes.title}>
                Users
              </Typography>
            </NavLink>
            <NavLink
              to="/search"
              className={classes.link}
              activeStyle={{
                fontWeight: "bold",
                borderBottom: "2px solid white"
              }}
            >
              <Typography variant="h6" className={classes.title}>
                Search
              </Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Route path="/" exact component={Users} />

            <Route path="/search" exact component={Search} />
            <Route path="/users/:id" component={User} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
