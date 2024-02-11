import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ItemList from "../ItemList";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handelClearCart = ()=>{
    dispatch(clearCart())
  }

  return (
    <div style={{ textAlign: "center", padding: "10px", margin: "10px 0px"}}>
      <div style={{display:'flex', justifyContent:'center',padding:"0px 15px",color:"rgba(165, 42, 42, 0.877)"}}>
      <h1>Cart</h1>
      <FontAwesomeIcon icon={faCartShopping} style={{fontSize: "30px", position:'relative', top:'25'}}/>
      </div>
      <button
        className="add"
        style={{ position: "static", backgroundColor: "black", color: "white" }}
        onClick={handelClearCart}
      >
        Clear Cart
      </button>
      {(cartItems.length != 0)?
      <div style={{marginLeft:"auto",
        marginRight:"auto",
        padding:"12px",
        borderRadius:'5px',
        marginTop:"18px",
        marginBottom:"10px",
        boxShadow: "0px 25px 20px -20px rgba(207, 90, 69, 0.877)",
        width:"50vw",
        background:"rgb(252, 209, 156)",}}>
        <ItemList items={cartItems} buttonText={"Remove-"}/>
      </div>
      :
      <div 
      style={{padding:"12px",
      borderRadius:'5px',
      marginTop:"18px",
      marginBottom:"10px",
      color:"rgba(203, 84, 63, 0.877)"}}>
        <h1>Hey! Your Cart is looking Empty, Please Add some Amazing dishes.</h1>
      <Link to="/">
      <button className="add" style={{position:"static"}}>Add Items</button> 
      </Link>
      </div>
}
    </div>
  );
}

export default Cart;
