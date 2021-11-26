import axios from "axios";

const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
});
axiosInstance.defaults.headers.common["Authorization"] = "Auth toker";

// axiosInstance.interceptors.request.use(
//     request=>{
//         if(!request.url?.includes('login')){
//             const  logged_user = getLoggedUser();
//             request.headers.common['AUTH-TOKEN'] = logged_user?.User?.auth_token;
//           }
//             return request;
//         },
//         error=>{
//             return Promise.reject(error);
//     }
// )

export default axiosInstance;
