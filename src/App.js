import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/home/Homepage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
