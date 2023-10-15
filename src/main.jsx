import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header/Header.jsx";
import Offers from "./components/Offers/Offers.jsx";
// import Detail from "./components/Detail/Detail.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

const Detail = lazy(() => import("./components/Detail/Detail.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route element={<App />} path="/" />
        {/* <Route element={<Offers />} path="/offers" />  */}

        <Route
          element={
            <Suspense fallback={<h1>Loading........</h1>}>
              <Detail />
            </Suspense>
            }
          path="/detail/:str"
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
