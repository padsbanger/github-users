import React from "react";
import { connect } from "react-redux";
import { State } from "../store/combineReducers";
import { getUsers } from "../store/usersList/actions";
import throttle from "lodash.throttle";
import { withStyles } from "@material-ui/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import UserListItem from "../components/UserListItem";
import { ListItem } from "@material-ui/core";

interface UsersProps {
  users: any;
  loading: boolean;
  getUsers: () => void;
  error: boolean;
  classes: any;
}

const useStyles = {
  root: {
    width: "100%"
  },
  inline: {
    display: "inline"
  },
  element: {
    "&:hover": {
      background: `rgba(0, 0, 0, 0.11)`
    }
  }
};
class Users extends React.Component<UsersProps> {
  constructor(props: UsersProps) {
    super(props);

    window.onscroll = throttle(() => {
      const { error, loading, getUsers } = props;
      if (error || loading) {
        return false;
      }
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        getUsers();
      }
    }, 500);
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getUsers();
    }
  }

  renderUsersList() {
    const { users } = this.props;
    return users.map((user: any) => {
      return <UserListItem user={user} key={user.login} />;
    });
  }

  render() {
    const { classes, loading } = this.props;
    return (
      <List className={classes.root}>
        {this.renderUsersList()}
        {loading ? (
          <ListItem>
            <CircularProgress />
          </ListItem>
        ) : null}
      </List>
    );
  }
}

const mapStateToProps = (state: State) => ({
  users: state.usersList.users,
  loading: state.usersList.loading
});

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Users));
