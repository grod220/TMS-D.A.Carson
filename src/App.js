import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import WithTracker from "./sharedUtilities/WithTracker";
import ErrorBoundary from "./sharedUtilities/error-boundaries";
import Navigation from "./components/shared/navigation/";
import Homepage from "./components/homepage";

const Menu = lazy(() => import("./components/menu"));
const CateringOrder = lazy(() => import("./components/CateringOrder"));
const EventCatering = lazy(() => import("./components/EventCatering"));
const AboutUs = lazy(() => import("./components/aboutUs"));
const Media = lazy(() => import("./components/media"));
const Delivery = lazy(() => import("./components/delivery"));
const OrderOnline = lazy(() => import("./components/OrderOnline"));
const Pickup = lazy(() => import("./components/Pickup"));
const Success = lazy(() =>
  import("./components/shared/OrderModule/order-result/Success")
);
const Cancelled = lazy(() =>
  import("./components/shared/OrderModule/order-result/Cancelled")
);

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ErrorBoundary>
        <Suspense fallback={<></>}>
          <Route exact path="/" component={WithTracker(Homepage)} />
          <Route path="/menu" component={WithTracker(Menu)} />
          <Route path="/aboutus" component={WithTracker(AboutUs)} />
          <Route path="/media" component={WithTracker(Media)} />
          <Route path="/delivery" component={WithTracker(Delivery)} />
          <Route exact path="/order" component={WithTracker(OrderOnline)} />
          <Route path="/order/pickup" component={WithTracker(Pickup)} />
          <Route
            path="/order/catering"
            component={WithTracker(CateringOrder)}
          />
          <Route path="/order/success" component={WithTracker(Success)} />
          <Route path="/order/cancelled" component={WithTracker(Cancelled)} />
          <Route
            path="/event-catering"
            component={WithTracker(EventCatering)}
          />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
