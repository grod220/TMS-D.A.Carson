import React from "react";
import OrderStore from "../../stores/OrderStore";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

import FulfillmentInput from "./FulfillmentInput";
import DeliveryAutocomplete from "./DeliveryAutocomplete";
import {
  getNextAvailableFulfillmentDateStr,
  getOneYearFromTodayStr
} from "../../stores/DateStore/date-utils";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;

  > div {
    margin: 0 5px 10px 5px;
  }
`;

const PickupLocation = styled.div`
  width: 100%;
  font-style: italic;
  color: #902e2d;
  font-size: 16px;
`;

const RedAnchor = styled.a`
  color: #902e2d;
  text-decoration: underline;
`;

const FulfillmentOptions = observer(() => {
  return (
    <Container>
      <FulfillmentInput
        title={
          OrderStore.fulfillmentOption === "delivery"
            ? "Delivery contact"
            : "Name"
        }
        type="text"
        store={OrderStore}
        field="contactName"
      />
      <FulfillmentInput
        title="phone #"
        type="tel"
        store={OrderStore}
        field="contactNumber"
      />
      <FulfillmentInput
        title={`${OrderStore.fulfillmentOption} date`}
        type="date"
        store={OrderStore.dateStore}
        field="fulfillmentDate"
        hasError={OrderStore.dateStore.fulfillmentDateError}
        min={getNextAvailableFulfillmentDateStr()}
        max={getOneYearFromTodayStr()}
      />
      <FulfillmentInput
        title={`${OrderStore.fulfillmentOption} time`}
        type="time"
        hasError={OrderStore.dateStore.fulfillmentTimeError}
        store={OrderStore.dateStore}
        field="fulfillmentTime"
        step="300"
      />
      {OrderStore.fulfillmentOption === "delivery" && (
        <>
          <FulfillmentInput
            title="Number of guests"
            type="number"
            store={OrderStore}
            field="numberOfGuests"
          />
          <DeliveryAutocomplete />
        </>
      )}
      <FulfillmentInput
        title="Any special instructions?"
        type="text"
        store={OrderStore}
        field="specialInstructions"
      />
      {OrderStore.fulfillmentOption !== "delivery" && (
        <PickupLocation>
          You can pick it up at the register at the Meatball Stoppe:{" "}
          <RedAnchor
            href="https://goo.gl/maps/RcCxxDcBH1Vfo2Zz7"
            target="_blank"
            rel="noopener noreferrer"
          >
            7325 Lake Underhill Road
          </RedAnchor>
        </PickupLocation>
      )}
    </Container>
  );
});

export default FulfillmentOptions;
