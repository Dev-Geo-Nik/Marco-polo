import styles from "./search.module.scss";
import SearchIcon from "../assets/img/icons/search.svg";

const Search: React.FC = () => {
	return (
		<div className={styles.input_container}>
			<input type="text" className={styles.input} placeholder="Search for a country…" />
			<img src={SearchIcon} alt="" className={styles.search_icon} />
		</div>
	);
};

export default Search;
