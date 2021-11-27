import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Box, Container } from "@chakra-ui/layout";
import TasksPage from "./pages/Tasks/TasksPage";

function App() {
	return (
		<Box minW="100vw" minH="100vh">
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/tasks" element={<TasksPage />} />
			</Routes>
		</Box>
	);
}

export default App;
