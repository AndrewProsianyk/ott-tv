"use client";

import YouTube from "react-youtube";

type VideoContainerProps = {
  videoId: string;
};

export default function VideoContainer({ videoId }: VideoContainerProps) {
  return (
    <div className="flex justify-center">
      <YouTube videoId={videoId} />
    </div>
  );
}
