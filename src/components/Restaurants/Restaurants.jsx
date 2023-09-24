import React, { useEffect, useContext } from "react";
import { ResContext } from "../../utils/ResContext";
import { URL } from "../../utils/data";
import axios from "axios";
import Card from "./Card";
import Filter from "../Filter/Filter";

const Restaurants = () => {
  
  const {restaurant, setRestaurant} = useContext(ResContext)
  
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setRestaurant(response?.data?.data?.cards));
  }, [setRestaurant]);


  

  return <Filter />;
};

export default Restaurants;
 