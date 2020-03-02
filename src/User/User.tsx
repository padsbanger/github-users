import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { State } from "../store/combineReducers";
import { getSingleUser, clearSingleUser } from "../store/singleUser/actions";

interface UserProps {
  match: any;
  getSingleUser: (userId: string) => void;
  clearSingleUser: () => void;
  user: any;
  loading: boolean;
  error: boolean;
}

class User extends React.Component<UserProps> {
  componentDidMount() {
    this.props.getSingleUser(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearSingleUser();
  }

  render() {
    const { loading, user, error } = this.props;
    if (loading) {
      return <div>loading</div>;
    }

    if (user) {
      return (
        <Card>
          <CardActionArea>
            <CardMedia image={user.avatar_url} title="Contemplative Reptile" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {user.name} {user.location ? `- ${user.location}` : ""}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Followers: {user.followers} Following: {user.following}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Public repos: {user.public_repos}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }
    if (error) {
      return <div>There was an error</div>;
    }
  }
}

const mapStateToProps = (state: State) => ({
  user: state.singleUser.user,
  error: state.singleUser.error,
  loading: state.singleUser.loading
});

const mapDispatchToProps = {
  getSingleUser,
  clearSingleUser
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
