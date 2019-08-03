import React from "react";
import { observer } from "mobx-react-lite";

import OrderStore from "../../stores/OrderStore";
import OrderTypeSelector from "./OrderTypeSelector";
import CheckoutSectionHeader from "../CheckoutSectionHeader";
import FulfillmentOptions from "./FulfillmentOptions";

const Fulfillment = observer(() => {
  return (
    <>
      <OrderTypeSelector />
      <CheckoutSectionHeader>
        {OrderStore.fulfillmentOption} info
      </CheckoutSectionHeader>
      <FulfillmentOptions />
    </>
  );
});

export default Fulfillment;
