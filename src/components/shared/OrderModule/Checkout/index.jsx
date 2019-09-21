import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import Fulfillment from "./Fulfillment";
import OrderSummary from "./OrderSummary";
import OrderStore from "../stores/OrderStore";
import Total from "./Total";
import StripeButton from "./StripeButton";
import CateringHighlightPromos from "./CateringHighlightPromos";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
`;

const Checkout = observer(() => {
  return (
    <Container>
      <Content>
        {OrderStore.orderType === "catering" && <CateringHighlightPromos />}
        <Fulfillment />
        <OrderSummary />
        {Boolean(OrderStore.shoppingCart.length) && (
          <>
            <Total />
            <StripeButton />
          </>
        )}
      </Content>
    </Container>
  );
});

export default Checkout;
