import React from "react";

import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

import PromoVideo from "assets/videos/promo.mp4";

const Video = () => {
  return (
    <section>
      <Plyr
        source={{
          type: "video",
          title: "Example title",
          sources: [
            {
              src: PromoVideo,
              type: "video/mp4",
              size: 1080,
            },
          ],
          poster: "/path/to/poster.jpg",
        }}
        options={
          {
            /* https://github.com/sampotts/plyr#options */
          }
        }
        {
          ...{
            /* Direct props for inner video tag (mdn.io/video) */
          }
        }
      />
    </section>
  );
};

export default Video;
