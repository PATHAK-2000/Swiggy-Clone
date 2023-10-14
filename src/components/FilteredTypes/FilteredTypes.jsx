import React, { useContext, useEffect, useState } from "react";
import { ResContext } from "../../context/ResContext";
import "./filteredTypes.css";
import Card from "../Restaurants/Card";

const Sort = ({ restaurant }) => {
  const handleAsc = () => {
    restaurant.sort((a, b) => {
      const nameA = a?.card?.card?.info?.name.toLowerCase();
      const nameB = b?.card?.card?.info?.name.toLowerCase();

      return nameA?.localeCompare(nameB);
    });
  };

  const handleDesc = () => {
    restaurant
      .sort((a, b) => {
        const nameA = a?.card?.card?.info?.name.toLowerCase();
        const nameB = b?.card?.card?.info?.name.toLowerCase();

        return nameA?.localeCompare(nameB);
      })
      .reverse();
  };

  const handleRating = () => {
    restaurant.sort((a, b) => {
      let nameA = a?.card?.card?.info?.avgRating;

      let nameB = b?.card?.card?.info?.avgRating;
      {
        nameA == undefined && (nameA = 0);
      }
      {
        nameB == undefined && (nameB = 0);
      }
      return nameB - nameA;
    });
  };

  return (
    <div className="sort_order">
      <div>
        <input
          type="radio"
          id="asc"
          name="sort"
          value="ASC"
          onClick={handleAsc}
        />
        <label htmlFor="asc">Name: A - Z </label>
      </div>
      <div>
        <input
          type="radio"
          id="desc"
          name="sort"
          value="DESC"
          onClick={handleDesc}
        />
        <label htmlFor="desc">Name: Z - A</label>
      </div>
      <div>
        <input
          type="radio"
          id="rating"
          name="sort"
          value="RATING"
          onClick={handleRating}
        />
        <label htmlFor="rating">Rating</label>
      </div>
    </div>
  );
};

const Delivery = ({ setRestaurant, restaurant }) => {
  const { setHandleLess, setHandleMore, setDeliveryTimeState, setIsModal } = useContext(ResContext);

  useEffect(() => {
    setHandleLess(restaurant);
  }, [restaurant, setHandleLess]);

  useEffect(() => {
    setHandleMore(restaurant);
  }, [restaurant, setHandleMore]);

  const handleLessTime = () => {
   setDeliveryTimeState(true)
    setHandleLess(
      restaurant?.filter(
        (data) => data?.card?.card?.info?.sla?.deliveryTime < 25
      )
    );
    setIsModal(false)
  };

  const handleMoreTime = () => {
    setDeliveryTimeState(false)
    setHandleMore(
      restaurant?.filter(
        (data) => data?.card?.card?.info?.sla?.deliveryTime > 25
      )
    );
    setIsModal(false)
  };

  return (
    <div className="delivery_order">
      <div>
        <input
          type="radio"
          id="less20"
          name="sort"
          value="LESS"
          onClick={handleLessTime}
        />
        <label htmlFor="less20">Less than 25 mins </label>
      </div>
      <div>
        <input
          type="radio"
          id="more20"
          name="sort"
          value="MORE"
          onClick={handleMoreTime}
        />
        <label htmlFor="more20">More than 25 mins</label>
      </div>
    </div>
  );
};



export { Sort, Delivery };
