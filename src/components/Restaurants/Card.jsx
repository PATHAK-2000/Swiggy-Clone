import React, { useState } from "react";
import demo_img from "../../assets/images/demo.jpeg";
import { IMAGE_URL } from "../../utils/data";
import star from "../../assets/logo/star.svg";
import "./card.css";

const Card = ({ restaurant }) => {
  
  return (
    <div className="card__main">
      {restaurant?.map((data) => (
        <>
          
          {data?.card?.card?.info && (
            <div className="card">
              <img
                src={IMAGE_URL + data?.card?.card?.info?.cloudinaryImageId}
                alt="demo_img"
              />
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
      ))}
    </div>
  );
};

export default Card;
