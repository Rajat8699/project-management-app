import { call, put, takeLatest, all } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInterceptors";
import {
	CREATE_TASK,
    CREATE_TASK_FAILED,
    CREATE_TASK_SUCCESS,
    GET_TASK,
    GET_TASK_SUCCESS,
    GET_TASK_FAILED
} from "../types";

//create task api
function createTaskApi(action) {
	return axiosInstance.post("project/add-task", action?.payload);
}
function* createTask(action) {
	try {
		const resp = yield call(createTaskApi, action);
		yield put({ type: CREATE_TASK_SUCCESS, data: resp });
	} catch (resp) {
		yield put({ type: CREATE_TASK_FAILED, error: resp });
	}
}
//get user assign  project api
function getTaskApi(action) {
	return axiosInstance.get("users/user-assign-project");
}
function* getTask(action) {
	try {
		const resp = yield call(getTaskApi, action);
		yield put({ type: GET_TASK_SUCCESS, data: resp });
	} catch (resp) {
		yield put({ type: GET_TASK_FAILED, error: resp });
	}
}

function* task() {
	yield all([takeLatest(CREATE_TASK, createTask)]);
    yield all([takeLatest(GET_TASK, getTask)]);

}
export default task;