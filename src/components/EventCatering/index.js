import React from "react";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero";
import CateringHero from "./plate-spread.jpg";
import BodyText from "./bodyText";
import CateringTestimonials from "./cateringTestimonials";
import PictureWaterfall from "./PictureWaterfall";

const EventCatering = () => (
  <div>
    <Helmet>
      <title>Catering :: The Meatball Stoppe</title>
      <meta
        name="description"
        content="Have The Meatball Stoppe cater your next event."
      />
    </Helmet>
    <ShortHero image={CateringHero} headline="Event Catering" />
    <BodyText />
    <PictureWaterfall />
    <CateringTestimonials />
  </div>
);

export default EventCatering;
