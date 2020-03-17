import React from "react";
import { Helmet } from "react-helmet";

import Overlay from "./modal-overlay";
import TallHero from "./hero/";
import OrderBar from "./orderBar/";
import SocialBar from "./socialBar/";
import HomeMenu from "./HomeMenu";
import TestimonialTaster from "./testimonialTaster/";
import LDPromo from "./LDPromo/";
import Map from "./map/";
import Passion from "./passion/";
import Footer from "./footer/";

import LazyLoad from "react-lazyload";

const Homepage = () => (
  <div>
    <Helmet>
      <title>The Meatball Stoppe :: Love & Famiglia, All Rolled Up</title>
      <meta
        name="description"
        content="Authentic Italian food loved by Guy Fieri & the entire community. Orlando's #1 ranked most family-friendly restaurant by USA Today."
      />
    </Helmet>
    <Overlay />
    <TallHero />
    <OrderBar />
    <LazyLoad height={350}>
      <SocialBar />
    </LazyLoad>
    <LazyLoad height={400}>
      <HomeMenu />
    </LazyLoad>
    <LazyLoad height={350}>
      <TestimonialTaster />
    </LazyLoad>
    <LazyLoad height={400}>
      <LDPromo />
    </LazyLoad>
    <LazyLoad height={450}>
      <Map />
    </LazyLoad>
    <LazyLoad height={400}>
      <Passion />
    </LazyLoad>
    <LazyLoad height={160}>
      <Footer />
    </LazyLoad>
  </div>
);

export default Homepage;
