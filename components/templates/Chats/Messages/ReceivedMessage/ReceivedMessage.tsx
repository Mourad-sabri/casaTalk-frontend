import { Avatar } from "@mui/material";
import React, { Component } from "react";
import { ReceivedMessageContainer } from "./style";

export interface ReceivedMessageProps {
  showAvatar?: boolean;
}

class ReceivedMessage extends Component<ReceivedMessageProps> {
  render() {
    return (
      <ReceivedMessageContainer showAvatar={this.props.showAvatar || false}>
        <div className="account">
          <Avatar sx={{ bgcolor: "orange" }}>Md</Avatar>
        </div>
        <div className="message">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, itaque?
          </div>
          <div className="date">1 min</div>
        </div>
      </ReceivedMessageContainer>
    );
  }
}

export default ReceivedMessage;
