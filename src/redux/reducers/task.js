import { CREATE_TASK_FAILED, CREATE_TASK_SUCCESS,GET_TASK_FAILED,GET_TASK_SUCCESS } from "../types";

const initialState = {
	Task: [],
};
const task = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_TASK_SUCCESS:
			return {
				...state,
				Task: action.data,
			};
		case CREATE_TASK_FAILED:
			return {
				...state,
				Task: action.error,
			};
            case GET_TASK_SUCCESS:
			return {
				...state,
				Task: action.data,
			};
		case GET_TASK_FAILED:
			return {
				...state,
				Task: action.error,
			};
		default:
			return state;
	}
};
export default task;
