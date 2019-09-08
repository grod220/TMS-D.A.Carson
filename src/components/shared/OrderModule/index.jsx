import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import OrderNav from "./OrderNav";
import OrderMenu from "./OrderMenu";
import OrderStore from "./stores/OrderStore";
import {
  getNextAvailableFulfillmentDate,
  getNextAvailableFulfillmentTime
} from "./stores/OrderStore/order-utils";
import Checkout from "./Checkout";

const initializeModule = catering => {
  if (
    (catering && OrderStore.orderType !== "catering") ||
    (!catering && OrderStore.orderType !== "normal")
  ) {
    OrderStore.shoppingCart = [];
  }
  if (catering) {
    OrderStore.orderType = "catering";
    OrderStore.fulfillmentOption = "delivery";
  } else {
    OrderStore.orderType = "normal";
    OrderStore.fulfillmentOption = "pickup";
  }
  OrderStore.activeTab = "Full menu";
  OrderStore.dateStore.fulfillmentDate = getNextAvailableFulfillmentDate();
  OrderStore.dateStore.fulfillmentTime = getNextAvailableFulfillmentTime();
};

const OrderModule = observer(({ catering }) => {
  useEffect(() => initializeModule(catering), [catering]);

  return (
    <>
      <OrderNav />
      {OrderStore.activeTab &&
        (OrderStore.activeTab === "Checkout" ? <Checkout /> : <OrderMenu />)}
    </>
  );
});

export default OrderModule;
