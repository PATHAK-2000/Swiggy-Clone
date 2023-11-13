import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import Offers from "./components/Offers/Offers.jsx";
import UserCart from "./components/UserCart/UserCart.jsx";
import appStore from "./utils/appStore.js";

// import Detail from "./components/Detail/Detail.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { Provider } from "react-redux";

const Detail = lazy(() => import("./components/Detail/Detail.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={appStore}>
        <Header />
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<UserCart />} path="/cart" />

          <Route
            element={
              <Suspense fallback={<h1>Loading........</h1>}>
                <Detail />
              </Suspense>
            }
            path="/detail/:str"
          />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);
