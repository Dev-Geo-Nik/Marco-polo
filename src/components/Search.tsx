import styles from "./search.module.scss";

import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
	return (
		<div className={styles.input_container}>
			<input type="text" className={styles.input} placeholder="Search for a country…" />

			<FaSearch className={styles.search_icon} />
		</div>
	);
};

export default Search;
