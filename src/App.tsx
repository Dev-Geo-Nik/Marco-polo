// libraries
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// local
import Home from "./pages/home/Home";
import "./assets/index.scss";
import CountrySinglePage from "./pages/dynamic/CountrySinglePage";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/country/:id" element={<CountrySinglePage />} />

				<Route path="*" element={<div>Error</div>} />
			</Routes>
		</Router>
	);
};

export default App;
