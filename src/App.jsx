import React, { useState } from "react";
import Header from "./components/Header/Header";
import { ResContext } from "./utils/ResContext";
import "./App.css";
import Restaurants from "./components/Restaurants/Restaurants";
import Filter from "./components/Filter/Filter";

function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [handleLess, setHandleLess] = useState([]);
  const [handleMore, setHandleMore] = useState([]);
  const [searched, setSearched] = useState([])
  const [deliveryTimeState, setDeliveryTimeState] = useState(false)
  const [isModal, setIsModal] = useState(false);

  return (
    <ResContext.Provider
      value={{
        restaurant,
        setRestaurant,
        handleLess,
        setHandleLess,
        handleMore,
        setHandleMore,
        deliveryTimeState,
        setDeliveryTimeState,
        isModal,
        setIsModal,
        searched,
        setSearched,
      }}
    >
      <Header />

      <Restaurants />
    </ResContext.Provider>
  );
}

export default App;
