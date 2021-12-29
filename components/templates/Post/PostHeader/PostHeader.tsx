import React from "react";
import { MoreVert, Public } from "@mui/icons-material";
import { Avatar, Button, ButtonGroup } from "@mui/material";
import { DatePost, PostHeaderContainer, Sponsored, UserName } from "./style";
import { PostHeaderProps } from "./types";

const PostHeaderTemplate = (props: PostHeaderProps) => {
  const { avatar_url, first_name, last_name = " ", created_at = " ", isSponored } = props;
  const { isfollowed, isAdmin } = props;
  return (
    <PostHeaderContainer>
      <div className="post__avatar">
        <Avatar variant="rounded" src={avatar_url ? avatar_url : undefined}>
          {first_name.slice(0, 2)}
        </Avatar>
      </div>
      <div className="post__userInfo">
        <UserName>
          <span className="username"> {`${first_name} ${last_name} `}</span>
        </UserName>
        {isSponored ? (
          <Sponsored> Sponsored</Sponsored>
        ) : (
          <DatePost>
            <span className="time">
              <Public className="icon" />
              {created_at} Ago
            </span>
          </DatePost>
        )}
      </div>

      <div className="btn">
        {isAdmin && (
          <ButtonGroup size="small" variant="contained" color="secondary">
            <Button> {isfollowed ? "unfollow" : "follow"} </Button>
            <Button startIcon={<MoreVert />} />
          </ButtonGroup>
        )}
      </div>
    </PostHeaderContainer>
  );
};

export default PostHeaderTemplate;
