import React from "react";
import OrderStore from "../../stores/OrderStore";

import OrderPickupOptionButton from "./OrderPickupOptionButton";
import OrderInfoSectionHeader from "../CheckoutSectionHeader";

const OrderTypeSelector = () => {
  return (
    OrderStore.orderType === "catering" && (
      <>
        <OrderInfoSectionHeader>order type</OrderInfoSectionHeader>
        <OrderPickupOptionButton>delivery</OrderPickupOptionButton>
        <OrderPickupOptionButton
          func={() => {
            OrderStore.deliveryLocation = undefined
          }}
        >
          pickup
        </OrderPickupOptionButton>
      </>
    )
  );
};

export default OrderTypeSelector;
