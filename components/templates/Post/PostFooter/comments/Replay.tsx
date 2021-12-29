import { MoreVert } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";

export interface CommentReplayProps {
  replay: string;
  isAdmin: boolean;
  profile: {
    avatar_url?: string;
    first_name: string;
  };
}

const CommentReplay = (props: CommentReplayProps) => {
  const {
    replay,
    profile: { avatar_url, first_name },
    isAdmin,
  } = props;
  return (
    <div className="replies">
      <div className="avatar">
        <Avatar src={avatar_url}> {first_name.slice(0, 2)} </Avatar>
      </div>
      <div className="comment-content reply-content">
        <div className="">{replay}</div>
        {isAdmin && (
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default CommentReplay;
