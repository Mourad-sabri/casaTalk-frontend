import React, { useMemo, useState } from "react";
import getLayout from "../components/layouts";
import AddPost from "../components/templates/AddPost/AddPost";
import Post from "../components/templates/Post/Post";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "@emotion/styled";
import { LinearProgress } from "@mui/material";
import { useQuery } from "@apollo/client";
import { PostQueryType, POSTS_QUEARY } from "../graphql/queries/posts";

const Container = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
`;

const ProgressCircleContainer = styled.div`
  width: 100%;
  padding: 5px 10px;
  height: 20px;
`;

const Index = () => {
  const [hasMore, setHasMore] = useState(true);
  const { error, loading, data, fetchMore } = useQuery<{ allPosts: PostQueryType[] }>(POSTS_QUEARY, {
    variables: {
      repliesData2: {
        take: 1,
        skip: 0,
      },
      data: {
        take: 1,
        skip: 0,
      },
      skip: 0,
      take: 10,
    },
  });

  function geMoreData() {}

  return (
    <Container id="el-id">
      <AddPost />
      <InfiniteScroll
        dataLength={data?.allPosts.length!}
        hasMore={false}
        loader={
          <ProgressCircleContainer>
            <LinearProgress color="secondary" />
          </ProgressCircleContainer>
        }
        endMessage={<div>there is no posts</div>}
        next={geMoreData}
        scrollableTarget="el-id"
      >
      {data?.allPosts
        ? data?.allPosts.map((post) => {
            return (
              <Post
                {...post}
                media_url="/img4.png"
                isFllowed
                isSponsored={false}
                likes_count={post.post_likes_count}
                comments={post.comments}
              />
            );
          })
        : "no possst"}
      {/* </InfiniteScroll> */}
    </Container>
  );
};

export default getLayout(Index);
