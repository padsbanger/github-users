import React from "react";
import { connect } from "react-redux";
import { State } from "../store/combineReducers";
import { searchUsers } from "../store/usersSearch/actions";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import { ListItem, CircularProgress, List } from "@material-ui/core";
import UserListItem from "../components/UserListItem";

interface SearchProps {
  searchResults: any;
  loading: boolean;
  searchUsers: (search: string) => void;
  error: boolean;
  classes: any;
  search: string;
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
  },
  input: {
    width: "100%"
  }
};
class Search extends React.Component<SearchProps> {
  renderSearchResults() {
    const { searchResults } = this.props;
    return searchResults.map((user: any) => {
      return <UserListItem user={user} key={user.login} />;
    });
  }

  render() {
    const { classes, loading } = this.props;
    return (
      <div>
        <TextField
          id="outlined-basic"
          className={classes.input}
          label="Search for users"
          value={this.props.search}
          onChange={e => {
            this.props.searchUsers(e.target.value);
          }}
        />
        {loading ? (
          <ListItem>
            <CircularProgress />
          </ListItem>
        ) : (
          <List>{this.renderSearchResults()}</List>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  searchResults: state.usersSearch.searchResults,
  loading: state.usersSearch.loading,
  search: state.usersSearch.search
});

const mapDispatchToProps = {
  searchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(Search));
