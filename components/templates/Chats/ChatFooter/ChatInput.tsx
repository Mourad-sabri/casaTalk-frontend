import { Photo, Send, EmojiEmotions } from "@mui/icons-material";
import { Avatar, Icon, IconButton, OutlinedInput, Stack } from "@mui/material";
import React, { Component } from "react";
import { ChatInputContainer } from "./style";

class ChatInput extends Component {
  render() {
    return (
      <ChatInputContainer>
        <div className="avatar">
          <Avatar
            sx={{
              width: 35,
              height: 35,
            }}
          >
            Md
          </Avatar>
        </div>
        <div className="input-container">
          <OutlinedInput
            className="input"
            multiline
            size="small"
            fullWidth
            endAdornment={
              <Stack spacing={1} display="flex" direction="row">
                <IconButton size="small">
                  <Send />
                </IconButton>
                <IconButton size="small">
                  <EmojiEmotions />
                </IconButton>
              </Stack>
            }
            placeholder="Start Typing ...."
          />
        </div>
        <Stack spacing={2} className="btns">
          <IconButton>
            <Photo />
          </IconButton>
        </Stack>
      </ChatInputContainer>
    );
  }
}

export default ChatInput;
