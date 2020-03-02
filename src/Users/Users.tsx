import React from "react";
import { connect } from "react-redux";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { State } from "../store/combineReducers";
import { getUsers } from "../store/usersList/actions";
import debounce from "lodash.debounce";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

interface UsersProps {
  users: any;
  loading: boolean;
  getUsers: () => void;
  error: boolean;
  since: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);

class Users extends React.Component<UsersProps> {
  constructor(props: UsersProps) {
    super(props);

    window.onscroll = debounce(() => {
      const { error, loading, getUsers, users } = props;
      if (error || loading) return;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        getUsers();
      }
    }, 100);
  }

  componentWillMount() {
    if (!this.props.users.length) {
      this.props.getUsers();
    }
  }

  renderUsersList() {
    const { users } = this.props;
    return users.map((user: any) => {
      return (
        <Link key={user.id} to={`/users/${user.id}`}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={user.login} src={user.avatar_url} />
            </ListItemAvatar>
            <ListItemText
              primary={user.login}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {user.html_url}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Link>
      );
    });
  }

  render() {
    return <List>{this.renderUsersList()}</List>;
  }
}

const mapStateToProps = (state: State) => ({
  users: state.usersList.users,
  loading: state.usersList.loading,
  since: state.usersList.since
});

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
