import React from "react";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero/";
import AboutUsHero from "./familyDronePic.jpg";
import TopIntro from "./topIntro/";
import LocationInfo from "./locationInfo/";
import DiningRoom from "./diningRoom/";
import AboutOwners from "./aboutOwners/";
import GivingBack from "./givingBack/";

const AboutUs = () => (
  <div>
    <Helmet>
      <title>About Us :: The Meatball Stoppe</title>
      <meta
        name="description"
        content="Making amazing Italian food and bringing families together has been our story from the beginning."
      />
    </Helmet>
    <ShortHero image={AboutUsHero} headline="About the Stoppe Famiglia" />
    <TopIntro />
    <LocationInfo />
    <DiningRoom />
    <AboutOwners />
    <GivingBack />
  </div>
);

export default AboutUs;
