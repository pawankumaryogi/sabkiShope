import axios from "axios";
import { CART_ADD_ITEM } from "../constans/cartConstans";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      price: data.price,
      countInStock: data.countInStock,
      qty,
      name: data.name,
      image: data.image,
    },
  });
  //   console.log(data);

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
