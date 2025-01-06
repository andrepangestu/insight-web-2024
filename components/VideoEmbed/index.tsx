"use client";

import useDeviceType from "@/hook/use-device-type";
import React from "react";

interface VideoEmbedProps {
  src: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = (props) => {
  const { isMobile, isTablet } = useDeviceType();

  return (
    <div className="mb-4">
      {isMobile ? (
        <div
          className="relative"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={props.src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <iframe
          width="560"
          height="315"
          src={props.src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        />
      )}
    </div>
  );
};

export default VideoEmbed;
