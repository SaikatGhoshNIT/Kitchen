import React, { useState } from "react";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useMenu from "../utils/useMenu";

function RestaurantMenu() {
  const [res, setRes] = useState("");
  const [resInfo, setResInfo] = useState([]);
  const [showIndex, setShowIndex] = useState(0)


  const { id } = useParams();
  //console.log(id);

  // const resInfo = useMenu(id);

  // console.log(resInfo);

  // const {name , cuisines} = resInfo?.cards[0]?.card?.card?.info;
  // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + id + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    const resData = jsonData?.data?.cards[0]?.card?.card?.info;
    const itemData =
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards; //[2]?.card?.card?.itemCards;
    //console.log(itemData);
    setRes(resData);
    setResInfo(itemData);
  };

  const categories = resInfo.filter(
    (res) =>
      res.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //console.log(categories);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "rgba(165, 42, 42, 0.877)" }}>{res.name}</h1>
        <h4 style={{ color: "rgba(165, 42, 42, 0.877)" }}>{res.cuisines}</h4>
        {categories.map((category , index) => {
           
          return (
            <RestaurantCategory
              data={category.card?.card}
              key={category?.card?.card?.title}
              index = {index}
              showItems = {index === showIndex ? true : false}
              setShowIndex = {(index)=> setShowIndex(index)}
            />
          );
        })}
      </div>
    </>
  );
}

export default RestaurantMenu;
