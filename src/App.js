import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/signup" element={<Signup />} />
				<Route path="/home" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
