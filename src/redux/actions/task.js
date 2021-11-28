import { CREATE_TASK, GET_TASK, GET_USER } from "../types";

export const createTask = (data) => ({
	type: CREATE_TASK,
	payload: data,
});

export const getTask = () => ({
	type: GET_TASK,
});

export const getUsers = () => ({
	type: GET_USER,
});
