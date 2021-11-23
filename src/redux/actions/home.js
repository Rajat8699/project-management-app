import { GET_USER } from "../types";

export const getUsers = (data) => ({
	type: GET_USER,
	data: data,
});
