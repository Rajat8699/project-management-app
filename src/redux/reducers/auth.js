import {
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT_FAILED,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
} from "../types";

const initialState = {
	Login: [],
	Register: [],
	Logout: [],
};
const auth = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				LOGIN: action.data,
			};
		case LOGIN_FAILED:
			return {
				...state,
				LOGIN: action.error,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				Register: action.error,
			};
		case REGISTER_FAILED:
			return {
				...state,
				Register: action.error,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				Logout: action.error,
			};
		case LOGOUT_FAILED:
			return {
				...state,
				Logout: action.error,
			};
		default:
			return state;
	}
};
export default auth;
