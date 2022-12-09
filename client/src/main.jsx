import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <TransactionsProvider>
    <Auth0Provider
      domain="thekavikumar.us.auth0.com"
      clientId="eT6hyVMnT5FYwUkLTec2RGXYWVb1v3N9"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </TransactionsProvider>,
  document.getElementById("root")
);
