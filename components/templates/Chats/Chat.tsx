import React, { Component } from "react";
import ChatInput from "./ChatFooter/ChatInput";
import ChatHeader from "./ChatHeader/ChatHeader";
import Messages from "./Messages/Messages";
import { ChatsContainer } from "./style";

class Chats extends Component {
  render() {
    return (
      <ChatsContainer>
        <ChatHeader />
        <Messages />
        <ChatInput />
      </ChatsContainer>
    );
  }
}

export default Chats;
