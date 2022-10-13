import { useEffect } from "react";
import CountryCard from "../../components/CountryCard";
import Filters from "../../components/Filters";
import Header from "../../components/Header";
import Search from "../../components/Search";

import { ActionTypes } from "../../context/Actions";
import { useCountriesContext } from "../../context/CountriesContext";
import { useFetch } from "../../hooks/useFetch";
import styles from "./home.module.scss";

const Home: React.FC = () => {
	const {
		dispatch,
		state: { currentFilteredCountries, searchInputValue },
	} = useCountriesContext();
	// Fetching the data
	const { data, error, loading } = useFetch("https://restcountries.com/v3.1/all");

	let displayCountries = null;

	useEffect(() => {
		if (data) {
			// When you have the data we sort the data
			const countries: any = data;
			const sortedCountries = countries.sort((a: any, b: any) => {
				return a.name.common.localeCompare(b.name.common);
			});
			// we store the data to context
			dispatch({ type: ActionTypes.FETCH_ALL_COUNTRIES, payload: sortedCountries });
		}
	}, [data]);

	// When the data is stored in context and filtered we display
	if (currentFilteredCountries.length > 0) {
		let filtered = [];
		// check if the user enters values at search input
		if (searchInputValue) {
			// we filter if we have match
			filtered = currentFilteredCountries.filter((t: any) => t.name.common.toLowerCase() === searchInputValue.toLowerCase());
		}
		// if we have match display the country
		if (filtered.length > 0) {
			displayCountries = filtered.map((country: any, index: any) => {
				return <CountryCard country={country} key={index} />;
			});
		} else {
			// else we display all countries
			displayCountries = currentFilteredCountries.map((country: any, index: any) => {
				return <CountryCard country={country} key={index} />;
			});
		}
	}

	return (
		<section className={styles.home}>
			<Header />
			<div className={styles.sub_header}>
				<Search />
				<Filters />
			</div>
			<div className={styles.countries_container}>{displayCountries}</div>
		</section>
	);
};

export default Home;
