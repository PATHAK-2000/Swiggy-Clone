import React from "react";
import "./userCart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../utils/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMAGE_URL_SMALL } from "../../utils/data";

const UserCart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  return (
    <div className="userCartMain">
      <div className="userCartDesc">
        {cartItems?.map((item) => (
          <>
            {console.log(item)}
            <div className="userCartRestaurant">
              <div className="userCartImage">
                <LazyLoadImage
                  src={IMAGE_URL_SMALL + item?.imageId}
                  alt="Image"
                />
              </div>
              <div className="userCartItemName">
                <h3> {item?.name}</h3>
                <p>{item?.description}</p>
              </div>
              
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserCart;
