import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { DETAIL_URL } from "../../utils/data";
import { IMAGE_URL_SMALL } from "../../utils/data";

import "./detail.css";
import DetailShimmer from "../Shimmer/DetailShimmer";
import Error from "../Error/Error";
const Detail = () => {
  const [menu, setMenu] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const dataItems = async () => {
      const data = await axios
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

  if (menu === undefined) {
    return <Error />;
  }

  return menu.length == 0 ? (
    <>
      <DetailShimmer />
      <DetailShimmer />
      <DetailShimmer />
      <DetailShimmer />
    </>
  ) : (
    menu?.map((items) =>
      items?.card?.card?.title == "Recommended"
        ? items?.card?.card?.itemCards?.map((item) => (
            <div className="recommended_main" key={item?.card?.info?.id}>
              <div className="recommended_left_section">
                <p className="item_name">{item?.card?.info?.name}</p>
                <p className="item_price">
                  &#8377;{" "}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
                <p className="item_description">
                  {item?.card?.info?.description}
                </p>
                {console.log(item?.card?.info)}
              </div>
              <div className="recommended_right_section">
                <img
                  src={IMAGE_URL_SMALL + item?.card?.info?.imageId}
                  alt="image"
                />
              </div>
            </div>
          ))
        : null
    )
  );
};

export default Detail;
