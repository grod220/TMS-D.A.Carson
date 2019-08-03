import React from "react";
import { Helmet } from "react-helmet";
import ShortHero from "../shared/shortHero";
import MeatballHero from "../OrderOnline/five-ball.jpg";

import OrderModule from "../shared/OrderModule";

const Pickup = () => {
  return (
    <>
      <Helmet>
        <title>Pickup :: The Meatball Stoppe</title>
        <meta
          name="description"
          content="Order a pickup so it'll be ready when you arrive"
        />
      </Helmet>
      <ShortHero image={MeatballHero} headline="Pickup Order" />
      <OrderModule />
    </>
  );
};

export default Pickup;
