import { Comment, Favorite, Share, FavoriteBorderOutlined } from "@mui/icons-material";

import { Button } from "@mui/material";
import React from "react";
import { ButtonsContainer } from "./style";

interface PostButtonsGroup {
  isLiked: boolean;
  likes_count: number;
  comments_count: number;
  share_counts: number;
}

const PostButtonsGroup = (props: PostButtonsGroup) => {
  const { isLiked, likes_count = 0, comments_count = 0, share_counts = 0 } = props;
  return (
    <ButtonsContainer>
      <Button
        size="small"
        className="btn"
        startIcon={isLiked ? <Favorite style={{ color: "red" }} /> : <FavoriteBorderOutlined />}
      >
        {likes_count}
      </Button>
      <Button size="small" className="btn" startIcon={<Comment />}>
        {comments_count}
      </Button>
      <Button size="small" className="btn" startIcon={<Share />}>
        {share_counts}
      </Button>
    </ButtonsContainer>
  );
};

export default PostButtonsGroup;
