import React from "react";
import { PostTextContainer } from "./style";

const PostText = ({ children }: { children: string }) => {
  return <PostTextContainer>{children}</PostTextContainer>;
};

export default PostText;
