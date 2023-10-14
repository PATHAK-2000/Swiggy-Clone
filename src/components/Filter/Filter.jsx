import React, { useContext, useState, useEffect } from "react";
import { ResContext } from "../../context/ResContext";
import Modal from "react-modal";
import filter from "../../assets/logo/filter.svg";
import close from "../../assets/logo/close.svg";
import "./filter.css";
import { Delivery, Sort } from "../FilteredTypes/FilteredTypes";
import Card from "../Restaurants/Card";

const Filter = () => {
  const {
    restaurant,
    setRestaurant,
    handleLess,
    handleMore,
    deliveryTimeState,
    isModal,
    setIsModal,
    searched,
    setSearched,
  } = useContext(ResContext);
  const [ratingFilter, setRatingFilter] = useState([]);
  const [isRating, setIsRating] = useState(false);

  // filters
  const [isSort, setIsSort] = useState(true);
  const [isDelivery, setIsDelivery] = useState(false);

  // search
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState({});
  const [isSearched, setIsSearched] = useState(false);

  // rating filter
  const handleFilter = () => {
    setIsRating(!isRating);
    setRatingFilter(
      restaurant.filter((data) => data?.card?.card?.info?.avgRating > 4.5)
    );
  };

  // search filter
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchFunction = () => {
    setIsSearched(true);
    setSearchData({ ...searchData, search });
  };

  useEffect(() => {
    setSearched(
      restaurant?.filter((data) =>
        searchData.search
          .toLowerCase()
          .includes(data?.card?.card?.info?.name.toLowerCase())
      )
    );
  }, [searchData.search]);

  useEffect(() => {
    {
      search == "" && setSearched(restaurant);
    }
  }, [search]);

  // modals-popup
  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "35rem",
      height: "auto",
      padding: 0,
      borderRadius: "10px",
    },
  };

  const handleSort = () => {
    setIsSort(true);
    setIsDelivery(false);
  };

  const handleDelivery = () => {
    setIsSort(false);
    setIsDelivery(true);
  };

  return (
    <div className="filter__main">
      <div className="food_detail">
        <h2>Tea</h2>
        <p>Hot sips of tea to brighten your mood instantly.</p>
      </div>
      <div className="filters">
        <div className="filter_main">
          <button
            className={"filter__btn " + (isRating == true && " filter_applied")}
            onClick={handleFilter}
          >
            <p>Rating: 4.5&#43;</p>
          </button>
          <button className="sort__btn" onClick={openModal}>
            <p>
              {" "}
              Filter <img src={filter} className="filter_icon" />
            </p>
          </button>
        </div>
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            onChange={handleSearch}
            value={search}
          />
          <button onClick={handleSearchFunction}>Search</button>
        </div>
        <Modal
          isOpen={isModal}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className="modal__main">
            <div className="modal__header">
              <div className="title">Filter</div>
              <div className="close_btn">
                {" "}
                <img
                  src={close}
                  alt="close"
                  className="close__modal"
                  onClick={closeModal}
                />
              </div>
            </div>
            <div className="modal__body">
              <div className="filter__list__type">
                <button
                  id="sort"
                  // className="type__sort active"
                  className={"type__sort" + (isSort && " active")}
                  onClick={handleSort}
                >
                  Sort
                </button>
                <button
                  id="delivery"
                  className={"type__delivery" + (isDelivery && " active")}
                  onClick={handleDelivery}
                >
                  Delivery Time
                </button>
              </div>
              <div className="filtered__options">
                {isRating == true
                  ? isSort && <Sort restaurant={ratingFilter} />
                  : isSort && <Sort restaurant={restaurant} />}

                {isRating == true
                  ? isDelivery && (
                      <Delivery
                        restaurant={ratingFilter}
                        setIsRating={setIsRating}
                      />
                    )
                  : isDelivery && (
                      <Delivery
                        restaurant={restaurant}
                        setRestaurant={setRestaurant}
                      />
                    )}
              </div>
            </div>
          </div>
        </Modal>
      </div>

      {!isSearched ? (
        isRating == true ? (
          isDelivery == true ? (
            deliveryTimeState == true ? (
              <Card restaurant={handleLess} />
            ) : (
              <Card restaurant={handleMore} />
            )
          ) : (
            <Card restaurant={ratingFilter} />
          )
        ) : isDelivery == true ? (
          deliveryTimeState == true ? (
            <Card restaurant={handleLess} />
          ) : (
            <Card restaurant={handleMore} />
          )
        ) : (
          <Card restaurant={restaurant} />
        )
      ) : (
        isSearched && <Card restaurant={searched} />
      )}
    </div>
  );
};

export default Filter;
