import {
	CREATE_PROJECT_FAILED,
	CREATE_PROJECT_SUCCESS,
	GET_ALL_PROJECTS_FAILED,
	GET_ALL_PROJECTS_SUCCESS,
} from "../types";

const initialState = {
	Project: [],
	projectsList: [],
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
		case GET_ALL_PROJECTS_SUCCESS:
			return {
				...state,
				projectsList: action.data,
			};
		case GET_ALL_PROJECTS_FAILED:
			return {
				...state,
				projectsList: action.error,
			};
		default:
			return state;
	}
};
export default home;
