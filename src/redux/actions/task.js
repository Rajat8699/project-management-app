import { CREATE_TASK ,GET_TASK} from "../types";

export const createTask = (data) => ({
	type: CREATE_TASK,
	payload: data,
});

export const getTask = () => ({
	type: GET_TASK
});
