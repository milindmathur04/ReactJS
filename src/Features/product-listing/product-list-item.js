import React from "react";
import AddBtn from "./add-btn";
import RemoveBtn from "./remove-btn";
import "./product-listing.css"

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <img
        height={100}
        title={props.product.name}
        src={`/products/${props.product.image}`}
        alt="Description"
      />
      <h3>{props.product.name}</h3>
      <div class="description">{props.product.description}</div>
      <div class="price">${props.product.price}</div>
      <div>
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />

        {props.cartItem ? (
          <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </div>
    </div>
  );
}
