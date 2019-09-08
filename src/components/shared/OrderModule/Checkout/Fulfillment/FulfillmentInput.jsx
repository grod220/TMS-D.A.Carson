import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";

const WidgetWrapper = styled.div`
  position: relative;
`;

const LabelHelper = styled.label`
  position: absolute;
  color: #484848;
  font-size: 16px;
  left: 10px;
  top: 2px;
  user-select: none;
  text-transform: capitalize;
`;

const InputEl = styled.input`
  padding: 26px 25px 0 10px;
  font-size: 18px;
  font-family: vollkorn;
  ${({ hasError }) => hasError && "border: 2px #ff1310 dotted;"}
`;

const FulfillmentInput = observer(
  ({ title, store, field, hasError, ...others }) => {
    return (
      <WidgetWrapper>
        <LabelHelper>{title}</LabelHelper>
        <InputEl
          {...others}
          hasError={hasError}
          onChange={e => (store[field] = e.target.value)}
          value={store[field] || ""}
          required
        />
      </WidgetWrapper>
    );
  }
);

export default FulfillmentInput;
