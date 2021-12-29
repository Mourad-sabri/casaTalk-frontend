import React, { useEffect, useRef } from "react";
import { VideoPostContainer } from "./style";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const PostYoutubeVideo = ({ src }: { src: string }) => {
  const VideoRef = useRef() as React.MutableRefObject<HTMLVideoElement>;

  useEffect(() => {
    const plyr = new Plyr(VideoRef.current, {
      settings: ["captions", "quality", "speed", "loop"],
    });

    return () => plyr.destroy();
  }, []);

  return (
    <VideoPostContainer>
      <video ref={VideoRef} className="plyr-rounded" id="player" playsInline controls>
        <source src={src} type="video/mp4" className="plyr-rounded " />
      </video>
    </VideoPostContainer>
  );
};

export default PostYoutubeVideo;
