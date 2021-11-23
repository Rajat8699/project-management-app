import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "../../utils/axiosInterceptors";
import { GET_USER_SUCCESS, GET_USER, GET_USER_FAILED } from "../types";

//getuserapi
function getuserApi(action) {
	return axios.get("https://jsonplaceholder.typicode.com/posts");
}
function* users(action) {
	try {
		const resp = yield call(getuserApi, action);
		yield put({ type: GET_USER_SUCCESS, data: resp });
	} catch (resp) {
		yield put({ type: GET_USER_FAILED, error: resp });
	}
}

function* home() {
	yield all([takeLatest(GET_USER, users)]);
}
export default home;
