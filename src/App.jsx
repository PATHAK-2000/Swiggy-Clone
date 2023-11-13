import { useState } from "react";

import { ResContext } from "./context/ResContext";

import Restaurants from "./components/Restaurants/Restaurants";

import "./App.css";


function App() {
  const [restaurant, setRestaurant] = useState([]);
  const [handleLess, setHandleLess] = useState([]);
  const [handleMore, setHandleMore] = useState([]);
  const [searched, setSearched] = useState([]);
  const [deliveryTimeState, setDeliveryTimeState] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <>
     
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
          <Restaurants />
        </ResContext.Provider>
    
    </>
  );
}

export default App;
