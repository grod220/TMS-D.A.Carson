import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.div`
  height: 50px;
  background-color: #f7d68c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d79c1b;
  font-size: 16px;
  text-align: center;
`;

const Highlight = styled.span`
  text-decoration: underline;
`;

const CateringHighlightPromo = () => {
  return (
    <Bar>
      <div>
        Need to scale up? We cater big parties and large-scale events.{" "}
        <Highlight>
          <Link to="/event-catering"> Learn more</Link>
        </Highlight>
      </div>
    </Bar>
  );
};

export default CateringHighlightPromo;
