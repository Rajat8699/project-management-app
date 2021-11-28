import { ADD_STATUS, CREATE_PROJECT, GET_ALL_PROJECTS } from "../types";

export const createProject = (data) => ({
	type: CREATE_PROJECT,
	payload: data,
});

export const getAllProjects = () => ({
	type: GET_ALL_PROJECTS,
});

export const addStatus = (data) => ({
	type: ADD_STATUS,
	payload: data,
});
