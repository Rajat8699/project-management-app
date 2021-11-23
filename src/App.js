import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
