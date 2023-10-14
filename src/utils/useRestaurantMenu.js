import React, { useState, useEffect } from "react";
import axios from "axios";
// file imports
import { DETAIL_URL } from "../utils/data";
import { useLocation } from "react-router-dom";
const useRestaurantMenu = () => {

  const [menu, setMenu] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const dataItems = async () => {
        await axios
        .get(DETAIL_URL + location.pathname.replace("/detail/", ""))
        .then((response) =>
          setMenu(
            response?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards
          )
        );
    };
    dataItems();
  }, [location.pathname]);

  return menu;
};

export default useRestaurantMenu;
