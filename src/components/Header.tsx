import styles from "./header.module.scss";
import ThemeIcon from "../assets/img/icons/moon.svg";

const Header: React.FC = () => {
	return (
		<div className={styles.header}>
			<p className={styles.text}>Where in the world?</p>
			<div className={styles.theme_container}>
				<img src={ThemeIcon} alt="" className={styles.theme_icon} />
				<span className={styles.theme_span}>Dark Mode</span>
			</div>
		</div>
	);
};

export default Header;
