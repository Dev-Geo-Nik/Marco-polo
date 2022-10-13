import styles from "./header.module.scss";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { defaultTheme, darkTheme } from "../utils/Themes";
import { useState } from "react";
const Header: React.FC = () => {
	const [currentTheme, setCurrentTheme] = useState<any>();
	const theme = localStorage.getItem("theme");
	// localStorage.clear();
	// console.log(currentTheme);
	if (theme) {
		let parsedTheme = JSON.parse(theme);

		if (parsedTheme === "light") {
			document.documentElement.style.cssText = defaultTheme;
		}

		if (parsedTheme === "dark") {
			document.documentElement.style.cssText = darkTheme;
		}
	}
	const handlerClick = () => {
		const theme = localStorage.getItem("theme");
		let parsedTheme = "";
		// console.log(theme);
		// set the initial theme value ,run onces
		if (localStorage.getItem("theme") === null) {
			document.documentElement.style.cssText = darkTheme;
			localStorage.setItem("theme", JSON.stringify("dark"));

			return;
		}
		if (theme) {
			parsedTheme = JSON.parse(theme);
		}

		if (parsedTheme === "light") {
			document.documentElement.style.cssText = darkTheme;
			localStorage.setItem("theme", JSON.stringify("dark"));
			// console.log(parsedTheme);
			setCurrentTheme("dark");

			return;
		}
		// default case
		if (parsedTheme === "dark") {
			document.documentElement.style.cssText = defaultTheme;
			localStorage.setItem("theme", JSON.stringify("light"));
			setCurrentTheme("light");
		}
	};
	return (
		<div className={styles.header}>
			<p className={styles.text}>Where in the world?</p>
			<div className={styles.theme_container} onClick={handlerClick}>
				{currentTheme === "light" ? <FaRegMoon className={styles.theme_icon} /> : <FaMoon className={styles.theme_icon} />}

				<span className={styles.theme_span}>{currentTheme === "light" ? "Light Mode" : "Dark Mode"}</span>
			</div>
		</div>
	);
};

export default Header;
