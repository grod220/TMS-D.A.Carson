import React from "react";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero/";
import CateringHero from "./plate-spread.jpg";
import BodyText from "./bodyText/";
import ContactBar from "./contactBar/";
import CateringTestimonials from "./cateringTestimonials/";
import PictureWaterfall from "./PictureWaterfall/";

const Catering = () => (
  <div>
    <Helmet>
      <title>Catering :: The Meatball Stoppe</title>
      <meta
        name="description"
        content="Have Isabella's Bella Cucina cater your next event. "
      />
    </Helmet>
    <ShortHero image={CateringHero} headline="Catering Options" />
    <BodyText />
    <ContactBar />
    <CateringTestimonials />
    <PictureWaterfall />
  </div>
);

export default Catering;
