import React from "react";

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://37c553e6cb9c4d7b91443519ccd448a9@sentry.io/1514998"
});

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
    Sentry.configureScope(scope => {
      scope.setExtra("errorBoundaryInfoParam", info);
    });
    Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <h1>Lost a meatball...</h1>
          <h1>Please refresh.</h1>
        </>
      );
    }

    return this.props.children;
  }
}
