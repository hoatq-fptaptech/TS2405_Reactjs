import { combineReducers } from "redux";
import cart_reducers from "./cart/reducer";
import loading_reducers from "./loading/reducer";

const root_reducers = combineReducers(
    {cart_reducers,loading_reducers}
);
export default root_reducers;