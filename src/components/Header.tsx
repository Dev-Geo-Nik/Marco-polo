import styles from "./header.module.scss";
import { FaRegMoon } from "react-icons/fa";

const Header: React.FC = () => {
	return (
		<div className={styles.header}>
			<p className={styles.text}>Where in the world?</p>
			<div className={styles.theme_container}>
				<FaRegMoon className={styles.theme_icon} />
				<span className={styles.theme_span}>Dark Mode</span>
			</div>
		</div>
	);
};

export default Header;
