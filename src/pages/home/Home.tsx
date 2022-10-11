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
		state: { currentFilteredCountries },
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
		displayCountries = currentFilteredCountries.map((country: any, index: any) => {
			return <CountryCard country={country} key={index} />;
		});
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
