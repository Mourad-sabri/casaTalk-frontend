import React, { Component } from "react";
import { SentMessageContainer } from "./style";

export interface SentMessageProps {
  showTime?: boolean;
}

class SentMessage extends Component<SentMessageProps> {
  render() {
    return (
      <SentMessageContainer>
        <div className="content">
          <div className="message">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eius eum vitae provident
            ipsa soluta possimus, labore nesciunt eos ipsam quidem totam repellendus corrupti
            voluptates perspiciatis debitis magni neque consectetur.
          </div>
          {this.props.showTime && <div className="date">1 min</div>}
        </div>
      </SentMessageContainer>
    );
  }
}

export default SentMessage;
