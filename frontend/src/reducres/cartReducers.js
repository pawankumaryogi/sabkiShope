import { CART_ADD_ITEM } from "../constans/cartConstans";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return state;

    default:
      return state;
  }
};
