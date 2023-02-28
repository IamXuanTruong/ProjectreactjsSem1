import { combineReducers } from "redux";
import UserReducers from "./UserReducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
    UserReducers,
    CartReducer
});

export default rootReducer;