import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

interface UserListItemProps {
  user: any;
}

function UserListItem(props: UserListItemProps) {
  const { user } = props;
  return (
    <Link key={user.id} to={`/users/${user.login}`}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={user.login} src={user.avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={user.login}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {user.html_url}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Link>
  );
}

export default UserListItem;
