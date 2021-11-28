import { CREATE_PROJECT ,GET_PROJECT} from "../types";

export const createProject = (data) => ({
	type: CREATE_PROJECT,
	payload: data,
});

export const getProject = () => ({
	type: GET_PROJECT,
});
