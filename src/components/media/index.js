import React from "react";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero/";
import MediaHero from "./cameraAndStudio.jpg";
import TripleD from "./tripleD/";
import NewsOutlets from "./newsOutlets/";
import VideoClips from "./videoClips/";
import MoreVidsText from "./moreVidsText/";

const Media = () => (
  <div>
    <Helmet>
      <title>Media :: The Meatball Stoppe</title>
      <meta
        name="description"
        content="Guy Fieri loves us and so does the greater Orlando community"
      />
    </Helmet>
    <ShortHero image={MediaHero} headline="In the media" />
    <TripleD />
    <NewsOutlets />
    <VideoClips />
    <MoreVidsText />
  </div>
);

export default Media;
