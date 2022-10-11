import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/index.scss";
import { CountriesContextProvider } from "./context/CountriesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<CountriesContextProvider>
			<App />
		</CountriesContextProvider>
	</React.StrictMode>
);
