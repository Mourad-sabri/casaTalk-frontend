import Image from "next/image";
import React from "react";
import { PostImageContainer } from "./style";

const PostImage = ({ src }: { src: string }) => {
  return (
    <PostImageContainer>
      <Image src={src} width={60} height={30} layout="responsive" className="img" />
    </PostImageContainer>
  );
};

export default PostImage;
