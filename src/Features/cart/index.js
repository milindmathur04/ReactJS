import React from "react";
import { connect } from "react-redux";

function sort(items) {
  return items.sort((a, b) => a.id < b.id);
}

function Cart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {sort(props.cart).map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                class="btn btn-primary"
                onClick={() => props.addToCart(item)}
              >
                +
              </button>
            </td>
            <td>
              <button
                class="btn btn-warning"
                onClick={() => props.removeFromCart(item)}
              >
                -
              </button>
            </td>
            <td>
              <button
                class="btn btn-danger"
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
