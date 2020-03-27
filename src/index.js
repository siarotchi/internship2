import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
