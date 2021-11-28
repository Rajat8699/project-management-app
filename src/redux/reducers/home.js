import { CREATE_PROJECT_FAILED, CREATE_PROJECT_SUCCESS } from "../types";

const initialState = {
	Project: [],
};
const home = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_PROJECT_SUCCESS:
			return {
				...state,
				Project: action.data,
			};
		case CREATE_PROJECT_FAILED:
			return {
				...state,
				Project: action.error,
			};
		default:
			return state;
	}
};
export default home;
