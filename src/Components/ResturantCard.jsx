import React, { createFactory } from "react";
import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
    cloudinaryImageId,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card" id="card">
      <div className="food-image">
        <img src={CDN_URL + cloudinaryImageId} alt="Food Image" />
      </div>
      <div className="res-detail">
        <h3 className="resdetails">{name}</h3>
        <h5
          className="resdetails"
          style={{ margin: "0px 4px", contain: "content", overflow: "hidden" }}
        >
          {cuisines.join(",")}
        </h5>
        <h5 className="resdetails" style={{ color: "green" }}>
          {avgRating}
        </h5>
        <div className="con">
          <h5 className="conresdetails">{deliveryTime} mins</h5>
          <h5 className="conresdetails">{costForTwo}</h5>
        </div>
      </div>
    </div>
  );
};

export const openResturantCard = (ResturantCard) => {
  return (props) => {
    return (
      <div style={{ position: "relative" }}>
        <label
          style={{
            position: "absolute",
            zIndex: "1",
            padding: "5px",
            backgroundColor: "green",
            color: "white",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            borderTopLeftRadius:"5px",
            top: "5px",
            left: "12px",
          }}
        >
          Open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
