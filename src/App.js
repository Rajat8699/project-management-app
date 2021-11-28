import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Box, Container } from "@chakra-ui/layout";
import TasksPage from "./pages/Tasks/TasksPage";
import { useState } from "react";

// function PrivateRoute({ children }) {
// 	const [isAuthenticated, setISAuthenticated] = useState(false);
// 	if (
// 		localStorage.getItem("Auth-token") &&
// 		localStorage.getItem("Auth-token") !== undefined
// 	) {
// 		setISAuthenticated(true);
// 	}
// 	return isAuthenticated ? children : <Navigate to="/" />;
// }

function App() {
	return (
		<Box minW="100vw" minH="100vh">
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route
					path="/home"
					element={
						// <PrivateRoute>
							<Homepage />
					    //   </PrivateRoute> 
					}
				/>
				<Route
					path="/tasks"
					element={
						// <PrivateRoute>
							<TasksPage />
						// </PrivateRoute>
					}
				/>
			</Routes>
		</Box>
	);
}

export default App;
