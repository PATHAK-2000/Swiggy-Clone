import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";

import { IMAGE_URL_SMALL } from "../../utils/data";

import "./detail.css";
import DetailShimmer from "../Shimmer/DetailShimmer";
import Error from "../Error/Error";
const Detail = () => {
  const menu = useRestaurantMenu();

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
