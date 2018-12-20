import React from "react";
import { connect } from "react-redux";
import "./index.css";

function sort(items) {
  return items.sort((a, b) => a.id < b.id);
}

function Cart(props) {
  return (
    <table id="cart">
      <thead>
        <tr>
          <th class="item">Item </th>
          <th class="item">Quantity</th>
          <th class="item">Add</th>
          <th class="item">Remove</th>
          <th class="item">Remove All</th>
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            <td class="items">{item.name}</td>
            <td>
              {item.quantity} 
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="btnidcart"
                onClick={() => props.addToCart(item)}
              >
                +
              </button>
            </td>
            <td>
              <button
                class="btn btn-warning"
                id="btnidremovecart"
                onClick={() => props.removeFromCart(item)}
              >
                -
              </button>
            </td>
            <td>
              <button
                class="btn btn-danger"
                id="btndanger"
                onClick={() => props.removeAllFromCart(item)}
              >
                Remove All from Cart
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
