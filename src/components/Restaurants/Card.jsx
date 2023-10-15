import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../utils/data";
import star from "../../assets/logo/star.svg";
import "./card.css";
import Detail from "../Detail/Detail";
import Shimmer from "../Shimmer/Shimmer";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
const Card = ({ restaurant }) => {
  const status = useOnlineStatus();



  return status == true ? (
    <h1 className="status__offline">Looks!! You are OFFLINE!!</h1>
  ) : (
    <div className="card__main">
      {restaurant?.length == 0 ? (
        <>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </>
      ) : (
        restaurant?.map((data) => (
          <>
            {data?.card?.card?.info && (
              <div className="card"> 
                <Link to={`/detail/${data?.card?.card?.info?.id}`}>
                  {" "}
                  <LazyLoadImage
                    src={IMAGE_URL + data?.card?.card?.info?.cloudinaryImageId}
                    alt="demo_img"
                    effect="blur"
                  />
                </Link>
                <div className="res__top">
                  <div className="res__name">
                    <b>{data?.card?.card?.info?.name}</b>
                  </div>
                  <div className="res_rating">
                    {data?.card?.card?.info?.avgRating !== undefined ? (
                      <>
                        {data?.card?.card?.info?.avgRating}{" "}
                        <img src={star} className="star" alt="star" />
                      </>
                    ) : (
                      "No ratings"
                    )}
                  </div>
                </div>
                <div className="res__bottom">
                  <div className="cuisine">
                    {(data?.card?.card?.info?.cuisines).slice(0, 2).join(", ") +
                      " ... "}
                  </div>
                  <div className="delivery_time">
                    {data?.card?.card?.info?.sla?.deliveryTime} mins
                  </div>
                </div>
                <div className="costForTwo">
                  {data?.card?.card?.info?.costForTwo}
                </div>
              </div>
            )}
          </>
        ))
      )}
    </div>
  );
};

export default Card;
