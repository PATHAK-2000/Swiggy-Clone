import React, { useState, useEffect } from "react";
import "./filter.css";
import Card from "../Card/Card";
import { data } from "../../util/data";
const Filter = () => {
  const [isTopRated, setIsTopRated] = useState(false);
  const handleClicked = () => {
    setIsTopRated(true);
  };
  const handleClickedAll = () => {
    setIsTopRated(false);
  };

  useEffect(() => {
    console.log("useEffect");
  },[])
  useEffect(() => {
    const fetchData =async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&collection=80494&tags=layout_CCS_Tea&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const data = response.json()
      console.log(data);
    };
    fetchData(  )
  },[]);

  return (
    <>
      <button type="button" onClick={handleClicked}>
        Top-Rated Restuarants{" "}
      </button>
      <button type="button" onClick={handleClickedAll}>
        All Restaurants
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
        {data?.map((data) => (
          <Card
            isTopRated={isTopRated}
            key={data.info["resId"]}
            resName={data.info["name"]}
            image={data.info["image"].url}
            cuisine={data.info["cuisine"]}
            rating={data.info["rating"]}
            delivery_time={data.order["deliveryTime"]}
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
