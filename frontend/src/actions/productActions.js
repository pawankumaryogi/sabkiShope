import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from "../constans/productConstans";
import axios from "axios";

export const listProducts = () => async (dispath) => {
  try {
    dispath({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispath({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatchEvent({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
