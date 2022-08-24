import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleCountry from "./SingleCountry";
import Navbar from "./Navbar";
function App() {
	return (
		<>
			<Navbar></Navbar>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/country/:name" element={<SingleCountry />} />
					{/* <Route path="*" element={<NoPage />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
