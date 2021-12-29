import React from "react";
import PostButtonsGroup from "./ButtonsGroup/PostButtonsGroup";
import PostComment, { PostCommentProps } from "./comments/Comment";
import { PostFooterContainer } from "./style";

interface PostFooterProps {
  isPostLiked: boolean;
  likes_count: number;
  comments_count: number;
  share_counts: number;
  comments: PostCommentProps[];
}

const PostFooter = (props: PostFooterProps) => {
  return (
    <PostFooterContainer>
      <PostButtonsGroup
        isLiked={props.isPostLiked}
        likes_count={props.likes_count}
        comments_count={props.comments_count}
        share_counts={props.share_counts}
      />
      {props.comments.length > 0
        ? props.comments.map((comment) => {
            return (
              <PostComment
                isAdmin={comment.isAdmin}
                comment={comment.comment}
                profile={comment.profile}
                replies_counts={comment.replies_counts}
                comment_likes={comment.comment_likes}
                replies={comment.replies}
              />
            );
          })
        : null}
    </PostFooterContainer>
  );
};

export default PostFooter;
