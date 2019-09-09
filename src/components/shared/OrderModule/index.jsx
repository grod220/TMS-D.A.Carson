import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";

import OrderNav from "./OrderNav";
import OrderMenu from "./OrderMenu";
import OrderStore from "./stores/OrderStore";
import Checkout from "./Checkout";
import { getNextAvailableFulfillmentDateStr, getNextAvailableFulfillmentTimeStr } from "./stores/DateStore/date-utils";

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
  OrderStore.dateStore.fulfillmentDate = getNextAvailableFulfillmentDateStr();
  OrderStore.dateStore.fulfillmentTime = getNextAvailableFulfillmentTimeStr();
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
