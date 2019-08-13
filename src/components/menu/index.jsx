import React from "react";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero";
import MenuHero from "./foodImageTiles.jpg";
import TopText from "./topText";
import MenuGrid from "./menuGrid";

const Menu = () => (
  <div>
    <Helmet>
      <title>Menu :: The Meatball Stoppe</title>
      <meta
        name="description"
        content="We have the best Italian food you'll find in Orlando"
      />
    </Helmet>
    <ShortHero image={MenuHero} headline="Our delicious menu" />
    <TopText />
    <MenuGrid />
  </div>
);

export default Menu;
