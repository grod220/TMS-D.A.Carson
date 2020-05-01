import React from "react";
import styled from "styled-components";
import { media } from "../../sharedUtilities/media";
import { Helmet } from "react-helmet";

import ShortHero from "../shared/shortHero/";
import DeliveryHero from "./uberEatsBiker.jpg";
import deviceScreens from "./telephoneBG.jpg";
import uberEatsLogo from "./uber.png";
import Highlight from "../shared/highlight/";
import SingleService from "./singleService/";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  margin-bottom: 5rem;

  ${media.phone`
    flex-direction: column-reverse;
    align-items: center;`};
`;

const LeftBox = styled.div`
  width: 45vw;
  font-size: 30px;

  ${media.phone`
    width: 90vw;`};
`;
// const SmallRedirect = styled.span`
//   color: #c1c1c1;
//   font-style: italic;
//   font-size: 1.8rem;
// `;
// const Underline = styled.a`
//   text-decoration: underline;
// `;

const ServicesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`;

const RightImage = styled.div`
  background: url(${deviceScreens}) no-repeat;
  height: 43rem;
  width: 45vw;
  background-size: contain;
  background-position: top;

  ${media.phone`
    height: 47vw;
    width: 68vw;`};
`;

const Delivery = () => (
  <div>
    <Helmet>
      <title>Delivery :: The Meatball Stoppe</title>
      <meta
        name="description"
        content="Sit back and enjoy the couch. We'll come to you."
      />
    </Helmet>
    <ShortHero image={DeliveryHero} headline="Delivery Order" />
    <Container>
      <LeftBox>
        Do you live within a <Highlight i>7-8mile radius</Highlight> of the
        Meatball Stoppe? We’ll come to you!
        <br />
        {/* <SmallRedirect>
          If not, just{" "}
          <span>
            <Underline
              href="http://eat24hrs.com/restaurants/order2/menu.php?id=71250"
              rel="noopener noreferrer"
              target="_blank"
            >
              go for a pickup
            </Underline>
          </span>.
        </SmallRedirect> */}
        <ServicesBox>
          <SingleService
            image={uberEatsLogo}
            buttonText="Go to Uber"
            color="rgb(91, 192, 222)"
            url="https://www.ubereats.com/orlando/food-delivery/the-meatball-stoppe/yBDto8eNQ2-X2HhNvMY39Q"
          />
        </ServicesBox>
      </LeftBox>
      <RightImage />
    </Container>
  </div>
);

export default Delivery;
