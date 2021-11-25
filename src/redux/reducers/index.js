import { combineReducers } from "redux";
import home from "./home";
import auth from "./auth";
const reducer = combineReducers({
	home,
	auth,
});
export default reducer;
