import React, { useEffect, useRef } from "react";
import { VideoPostContainer } from "./style";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const PostVideo = ({ src }: { src: string }) => {
  const VideoRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const plyr = new Plyr(VideoRef.current, {
      settings: ["captions", "quality", "speed", "loop"],
    });

    return () => plyr.destroy();
  }, []);

  return (
    <VideoPostContainer>
      <div ref={VideoRef} className="plyr__video-embed" id="player">
        <iframe src={src} allowFullScreen allowTransparency allow="autoplay"></iframe>
      </div>
    </VideoPostContainer>
  );
};

export default PostVideo;
