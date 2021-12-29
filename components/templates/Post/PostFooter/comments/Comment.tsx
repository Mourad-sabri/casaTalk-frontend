import { ArrowDropDown, FavoriteOutlined, MoreVert } from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import CommentReplay, { CommentReplayProps } from "./Replay";
import { CommentContainer } from "./style";

export interface PostCommentProps {
  comment: string;
  comment_likes_count: number;
  replies_counts?: number;
  isAdmin: boolean;
  profile: {
    avatar_url?: string;
    first_name: string;
  };
  replay: CommentReplayProps[];
}

const PostComment = (props: PostCommentProps) => {
  const [showAllReplies, setShowAllReplies] = useState<boolean>(false);

  const hanldeShowAllReplies = () => {
    setShowAllReplies(true);
  };

  const {
    comment,
    replies_counts = 0,
    comment_likes_count = 0,
    isAdmin = true,
    replay = [],
    profile: { avatar_url, first_name },
  } = props;
  return (
    <CommentContainer>
      <div className="avatar">
        <Avatar src={avatar_url}> {first_name.slice(0, 2)} </Avatar>
      </div>
      <div className="comment-content">
        {comment}
        <div className="btns">
          <Button size="small" startIcon={<FavoriteOutlined />}>
            {comment_likes_count}
          </Button>
          <Button size="small" startIcon={<ArrowDropDown />} onClick={hanldeShowAllReplies}>
            replies {replies_counts}
          </Button>
          {isAdmin && (
            <IconButton size="small">
              <MoreVert fontSize="small" />
            </IconButton>
          )}
        </div>
        {replay.length > 0
          ? replay.map((replay, i) => {
              if (!showAllReplies && i === 0) {
                return (
                  <CommentReplay
                    key={i}
                    isAdmin={replay.isAdmin}
                    replay={replay.replay}
                    profile={replay.profile}
                  />
                );
              } else if (showAllReplies) {
                return (
                  <CommentReplay
                    key={i}
                    isAdmin={replay.isAdmin}
                    replay={replay.replay}
                    profile={replay.profile}
                  />
                );
              }
              return null;
            })
          : null}
      </div>
    </CommentContainer>
  );
};

export default PostComment;
