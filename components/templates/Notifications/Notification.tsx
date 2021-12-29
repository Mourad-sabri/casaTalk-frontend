import { Avatar } from "@mui/material";
import React, { Component } from "react";
import { NotificationContainer } from "./style";

class Notification extends Component {
  render() {
    return (
      <NotificationContainer elevation={0.5}>
        <div className="notification-avatar">
          <Avatar
            sx={{
              width: 50,
              height: 50,
            }}
          />
        </div>
        <div className="notification-content">
          <div className="text">md update his post</div>
          <div className="date">1 day ago</div>
        </div>
      </NotificationContainer>
    );
  }
}

export default Notification;
