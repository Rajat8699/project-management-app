import {
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT_FAILED,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
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
				Login: action.data,
			};
		case LOGIN_FAILED:
			return {
				...state,
				Login: action.error,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				Register: action.data,
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
