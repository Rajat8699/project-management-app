import { GET_USER_FAILED, GET_USER_SUCCESS } from "../types";

const initialState = {
	Users: [],
};
const home = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_SUCCESS:
			return {
				...state,
				Users: action.data,
			};
		case GET_USER_FAILED:
			return {
				...state,
				Users: action.error,
			};
		default:
			return state;
	}
};
export default home;
