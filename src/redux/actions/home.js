import { CREATE_PROJECT } from "../types";

export const createProject = (data) => ({
	type: CREATE_PROJECT,
	payload: data,
});
