import { useState } from "react";
import { ActionTypes } from "../context/Actions";
import { useCountriesContext } from "../context/CountriesContext";
import styles from "./filters.module.scss";

const Filters: React.FC = () => {
	const {
		dispatch,
		state: { allCountries },
	} = useCountriesContext();
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// console.log(e.currentTarget.value);

		if (e.currentTarget.value === "Filter by Region") {
			dispatch({ type: ActionTypes.CURRENT_FILTERED_COUNTRIES, payload: allCountries });
		} else {
			// console.log("filter");

			const payloadArray = allCountries.filter((country: any) => {
				if (country.region === e.currentTarget.value) {
					return country;
				}
			});

			dispatch({ type: ActionTypes.CURRENT_FILTERED_COUNTRIES, payload: payloadArray });
		}
	};
	return (
		<>
			<select onChange={handleChange} className={styles.select}>
				<option defaultValue="Filter by Region">Filter by Region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</>
	);
};

export default Filters;
