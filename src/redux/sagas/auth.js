import { call, put, takeLatest, all } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInterceptors";
import axios from "axios";
import {
	LOGIN,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	REGISTER,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
} from "../types";

const baseUrl = process.env.REACT_APP_API_BASE_URL;
//loginapi
function LoginApi(action) {
	return axios.get("/signin", action?.data);
}
function* login(action) {
	try {
		const resp = yield call(LoginApi, action);
		yield put({ type: LOGIN_SUCCESS, data: resp });
	} catch (resp) {
		yield put({ type: LOGIN_FAILED, error: resp });
	}
}

function RegisterApi(action) {
	return axios.post(`${baseUrl}/signup`, action?.data);
}
function* register(action) {
	try {
		const resp = yield call(RegisterApi, action);
		yield put({ type: REGISTER_SUCCESS, data: resp });
	} catch (resp) {
		yield put({ type: REGISTER_FAILED, error: resp });
	}
}

function* auth() {
	yield all([takeLatest(LOGIN, login)]);
	yield all([takeLatest(REGISTER, register)]);
}
export default auth;
