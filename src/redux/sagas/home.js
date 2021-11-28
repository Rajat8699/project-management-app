import { call, put, takeLatest, all } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInterceptors";
import {
	CREATE_PROJECT_SUCCESS,
	CREATE_PROJECT,
	CREATE_PROJECT_FAILED,
	GET_PROJECT,
	GET_PROJECT_FAILED,
	GET_TASK_SUCCESS
} from "../types";

//create project api
function createProjectApi(action) {
	return axiosInstance.post("project/add-project", action?.payload);
}
function* createProject(action) {
	try {
		const resp = yield call(createProjectApi, action);
		yield put({ type: CREATE_PROJECT_SUCCESS, data: resp });
	} catch (resp) {
		yield put({ type: CREATE_PROJECT_FAILED, error: resp });
	}
}

function getProjectApi(action) {
	return axiosInstance.get("users/user-project");
}
function* getProject(action) {
	try {
		const resp = yield call(getProjectApi, action);
		yield put({ type: GET_TASK_SUCCESS, data: resp });
	} catch (resp) {
		yield put({ type: GET_PROJECT_FAILED, error: resp });
	}
}
function* home() {
	yield all([takeLatest(CREATE_PROJECT, createProject)]);
	yield all([takeLatest(GET_PROJECT, getProject)]);

}
export default home;
