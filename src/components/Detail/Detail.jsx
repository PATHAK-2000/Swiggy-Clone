import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";

import { IMAGE_URL_SMALL } from "../../utils/data";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./detail.css";
import DetailShimmer from "../Shimmer/DetailShimmer";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const Detail = () => {
  const menu = useRestaurantMenu();
  const dispatch = useDispatch()
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
                <div className="recommended_right_section_image">
                <LazyLoadImage
                  src={IMAGE_URL_SMALL + item?.card?.info?.imageId}
                  alt="image"
                  effect="blur"
                  
                />
                <button className="addCart" onClick={() => dispatch(addItem(item?.card?.info))}>Add +</button>
                </div>
              </div>
            </div>
          ))
        : null
    )
  );
};

export default Detail;
