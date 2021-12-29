import { PostBodyContainer } from "./PostBody/style";
import PostText from "./PostBody/text/Text";
import PostVideo from "./PostBody/video/PostVideo";
import PostFooter from "./PostFooter/PostFooter";
import PostHeaderTemplate from "./PostHeader/PostHeader";
import { PostContainer } from "./style";
import { PostCommentProps } from "./PostFooter/comments/Comment";
import PostImage from "./PostBody/Image/Image";
import PostYoutubeVideo from "./PostBody/video/PostVideo";

interface PostProps {
  content: string;
  created_at: string;
  isFllowed: boolean;
  isAdmin: boolean;
  isSponsored: boolean;
  isLiked: boolean;
  profile: {
    first_name: string;
    last_name: string;
    avatar_url?: string;
  };
  media_type: string;
  media_url: string;
  likes_count: number;
  comments_count: number;
  share_count: number;
  comments: PostCommentProps[];
}

function Post(props: PostProps) {
  function selectMediatype(type: string) {
    if (type === "video") {
      return <PostVideo src={props.media_url} />;
    } else if (type === "youtube_video") {
      return <PostYoutubeVideo src={props.media_url} />;
    } else {
      return <PostImage src={props.media_url} />;
    }
  }
  return (
    <PostContainer elevation={1}>
      <PostHeaderTemplate
        last_name={props.profile.last_name}
        created_at={props.created_at}
        first_name={props.profile.first_name}
        isfollowed={props.isFllowed}
        isAdmin={props.isAdmin}
        isSponored={props.isSponsored}
      />
      <PostBodyContainer>
        <PostText>{props.content}</PostText>
        {selectMediatype(props.media_type)}
      </PostBodyContainer>
      <PostFooter
        isPostLiked={props.isLiked}
        comments={props.comments}
        comments_count={props.comments_count}
        share_counts={props.share_count}
        likes_count={props.likes_count}
      />
    </PostContainer>
  );
}
export default Post;
