import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import Fulfillment from "./Fulfillment";
import OrderSummary from "./OrderSummary";
import OrderStore from "../stores/OrderStore";
import CateringHighlightPromo from "./CateringHighlightPromo";
import Total from "./Total";
import StripeButton from "./StripeButton";

const Container = styled.div`
  width: 100vw;
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
        <Fulfillment />
        {OrderStore.orderType === "catering" && <CateringHighlightPromo />}
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
