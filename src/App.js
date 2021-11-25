import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { Container } from "@chakra-ui/layout";
import TasksPage from "./pages/Tasks/TasksPage";

function App() {
	return (
		<Container minW="100vw" minH="100vh" centerContent>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route path="/home" element={<Homepage />} />
				<Route path="/tasks" element={<TasksPage />} />
			</Routes>
		</Container>
	);
}

export default App;
