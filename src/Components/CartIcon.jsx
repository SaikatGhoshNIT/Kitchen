import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartIcon({ cartItems }) {
  return (
    <span>
      {cartItems.length === 0 ? (
        <span>
          <FontAwesomeIcon
            icon={faCartPlus}
            style={{ color: "rgba(165, 42, 42, 0.877)", fontSize: "30px" }}
          />
          <span
            style={{
              position: "relative",
              top: "-20px",
              padding: "1px",
              color: "rgb(248, 82, 6)",
            }}
          >
            {cartItems.length}
          </span>
        </span>
      ) : (
        <span>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ color: "rgba(165, 42, 42, 0.877)", fontSize: "30px" }}
          />
          <span
            style={{
              position: "relative",
              top: "-20px",
              padding: "1px",
              color: "rgb(248, 82, 6)",
            }}
          >
            {cartItems.length}
          </span>
        </span>
      )}
    </span>
  );
}

export default CartIcon;
