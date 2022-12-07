import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
  productListReducres,
  productDetailsReducres,
} from "./reducres/productReducers";

const reducer = combineReducers({
  productList: productListReducres,
  productDetails: productDetailsReducres,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
