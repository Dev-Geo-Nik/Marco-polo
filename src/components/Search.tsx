import styles from "./search.module.scss";
import { FaSearch } from "react-icons/fa";
import { useCountriesContext } from "../context/CountriesContext";
import { ActionTypes } from "../context/Actions";

const Search: React.FC = () => {
	const {
		dispatch,
		state: { searchInputValue },
	} = useCountriesContext();

	const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value;
		// console.log(e);
		dispatch({ type: ActionTypes.SEARCH_FILTER, payload: value });
	};

	return (
		<div className={styles.input_container}>
			<input type="text" className={styles.input} value={searchInputValue} onChange={handlerChange} placeholder="Search for a country…" />

			<FaSearch className={styles.search_icon} />
		</div>
	);
};

export default Search;
