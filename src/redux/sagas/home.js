import { call, put, takeLatest, all } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInterceptors";
import {
	CREATE_PROJECT_SUCCESS,
	CREATE_PROJECT,
	CREATE_PROJECT_FAILED,
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

function* home() {
	yield all([takeLatest(CREATE_PROJECT, createProject)]);
}
export default home;
