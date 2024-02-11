import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

function ItemList({ items , buttonText }) {
  //console.log(items);
const dispatch = useDispatch()

function handleAddItem(item){
  //Dispatch an Action
  //dispatch(addItem("pizza")) 
  //! this "pizza" will set as "action.payload", so it will pass it to 2nd parameter's (action) value as a object {payload : pizza}
  (buttonText === "ADD+") ? dispatch(addItem(item)) : dispatch(removeItem())
   
}

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="items" style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            <div style={{color:"rgba(145, 34, 34, 0.877)"}}>
              <h3>{item.card.info.name}</h3>
              <span style={{fontSize:'1.1rem'}}><b>{item.card.info.price / 100|| item.card.info.defaultPrice / 100}₹</b></span>
            </div>
            <p style={{opacity:'0.7'}}>{item.card.info.description}</p>
          </div>
          
        
        <div style={{position:'relative'}}>
        <img id="itemImg" src={CDN_URL + item.card.info.imageId} alt="Food Image" />
        <button className="add" onClick={() => handleAddItem(item)}>{buttonText}</button>
      </div>

      </div>
      ))}
    </div>
  );
}

export default ItemList;
