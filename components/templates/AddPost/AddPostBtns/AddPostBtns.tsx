import { Add, EmojiEmotions, Image } from "@mui/icons-material";
import { Button, ButtonGroup, IconButton } from "@mui/material";
import React, { Component } from "react";
import { AddPostbtnsContainer } from "./style";

function AddPostbtns({ setDisplay, display }: { setDisplay: any; display: boolean }) {
  return (
    <AddPostbtnsContainer>
      <ButtonGroup variant="text" size="small">
        <IconButton onClick={() => setDisplay(!display)}>
          <Image />
        </IconButton>
        <IconButton>
          <EmojiEmotions />
        </IconButton>
        <Button type="submit" startIcon={<Add />}>
          Post
        </Button>
      </ButtonGroup>
    </AddPostbtnsContainer>
  );
}

export default AddPostbtns;
