import React from "react";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero/";
import AboutUsHero from "../aboutUs/familyDronePic.jpg";

const Pastries = () => (
  <div>
    <Helmet>
      <title>La Differenza Bakery</title>
      <meta
        name="description"
        content="A new approach to desserts and baking. Our desserts are made in small batches with the best possible ingredients."
      />
    </Helmet>
    <ShortHero image={AboutUsHero} headline="About the Stoppe Famiglia" />
  </div>
);

export default Pastries;
