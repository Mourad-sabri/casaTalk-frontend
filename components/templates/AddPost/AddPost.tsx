import { Avatar, OutlinedInput } from "@mui/material";
import React, { Component, useState } from "react";
import AddPostbtns from "./AddPostBtns/AddPostBtns";
import PostDropZone from "./DropZone/DropZone";
import { AddPostContainer } from "./style";

function AddPost() {
  const [file, setFile] = useState();
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(file);
    console.log(value);
  };

  return (
    <AddPostContainer elevation={1}>
      <form onSubmit={handleSubmit}>
        <div className="addPost__input">
          <div className="addPost__input-avatar">
            <Avatar variant="rounded">Md</Avatar>
          </div>
          <div className="addPost__input-oulined">
            <OutlinedInput
              size="small"
              multiline
              fullWidth
              className="input"
              placeholder="what's goning on with you today ? let your friend know ..."
              name="content"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </div>
        </div>
        <PostDropZone onChange={setFile} display={display} />
        <AddPostbtns setDisplay={setDisplay} display={display} />
      </form>
    </AddPostContainer>
  );
}

export default AddPost;
