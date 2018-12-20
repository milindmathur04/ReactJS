import React from "react";

export default function RemoveButton(props) {
  return (
    <button
      class="btn btn-warning button"
      onClick={() => props.removeFromCart(props.cartItem)}
    >
      Remove
    </button>
  );
}
