import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

function ListItemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}

class Sidebar extends Component {
  render() {
    return (
      <List>
        <ListItemLink to="/admin">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemLink>
        <ListItemLink to="/admin">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemLink>
      </List>
    );
  }
}

export default Sidebar;
