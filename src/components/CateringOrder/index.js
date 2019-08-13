import React from "react";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero";
import CateringHero from "./baked-pasta.jpg";
import OrderModule from "../shared/OrderModule";

const CateringOrder = () => (
  <div>
    <Helmet>
      <title>Catering Order :: The Meatball Stoppe</title>
      <meta
        name="description"
        content="Order some catering for pickup or delivery."
      />
    </Helmet>
    <ShortHero image={CateringHero} headline="Catering Order" />
    <OrderModule catering />
  </div>
);

export default CateringOrder;
