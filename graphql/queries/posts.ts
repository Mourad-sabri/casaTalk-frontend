import { gql } from "@apollo/client";

export const POSTS_QUEARY = gql`
  query AllPosts($data: AllCommentsInputs!, $repliesData2: LoadRepliesInput!, $skip: Float!, $take: Float!) {
    allPosts(skip: $skip, take: $take) {
      post_id
      content
      media_type
      media_url
      created_at
      profile_id
      isAdmin
      post_likes_count
      comments_count
      share_count
      isLiked
      profile {
        first_name
        profile_id
        avatar_url
        last_name
      }
      comments(data: $data) {
        comment_id
        comment
        created_at
        isAdmin
        isLiked
        profile {
          first_name
          last_name
          profile_id
          avatar_url
        }
        comment_likes_count
        replies(data: $repliesData2) {
          comment_replay_id
          replay
          created_at
          isAdmin
          profile {
            first_name
            last_name
            profile_id
            avatar_url
          }
        }
      }
    }
  }
`;

export interface CommentQuery {
  comment_id: string;
  comment: string;
  created_at: string;
  isAdmin: boolean;
  isLiked: boolean;
  comment_likes_count: number;
  replay: ReplayQuery[];
  profile: {
    first_name: string;
    last_name: string;
    profile_id: string;
    avatar_url?: string;
  };
}

export interface ReplayQuery {
  comment_replay_id: string;
  replay: string;
  created_at: string;
  isAdmin: boolean;
  profile: {
    first_name: string;
    last_name: string;
    profile_id: string;
    avatar_url: string;
  };
}

export interface PostQueryType {
  post_id: string;
  content: string;
  media_type: string;
  media_url: string;
  created_at: string;
  profile_id: string;
  isAdmin: boolean;
  post_likes_count: number;
  comments_count: number;
  share_count: number;
  isLiked: boolean;
  profile: {
    first_name: string;
    profile_id: string;
    avatar_url: string;
    last_name: string;
  };
  comments: CommentQuery[];
}
