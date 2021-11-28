import { CREATE_TASK, GET_TASK, GET_USER } from "../types";

export const createTask = (data) => (
	console.log(data, "ffffffffffffffffffffffffffff"),
	{
		type: CREATE_TASK,
		payload: data,
	}
);

export const getTask = (data) => ({
	type: GET_TASK,
	data: data,
});

export const getUsers = () => ({
	type: GET_USER,
});
