import React from "react";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./sharedUtilities/registerServiceWorker";
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
registerServiceWorker();
