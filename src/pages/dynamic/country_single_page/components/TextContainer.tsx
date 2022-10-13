import { Link } from "react-router-dom";
import styles from "./textContainer.module.scss";

interface Props {
	country: any;
	allCountries: any;
}

const TextContainer: React.FC<Props> = ({ country, allCountries }) => {
	const {
		population,
		subregion,
		region,
		capital,
		tld,
		name: { common: commonName },
		currencies,
		languages,
	} = country;

	// drill down to the response object and extract the native name string
	let nativeName: any = Object.entries(country.name.nativeName);
	let nativeNameString = nativeName[0][1].common;

	// drill down to the response object and extract the native currency string
	const currency = Object.entries(currencies);
	let speakingLanguages = Object.values(languages).map((language: any) => {
		return language;
	});

	let countriesArray: string[] = [];
	let displayBorderCountries;

	// We check if borders exist because the api do not include borders in all responses
	if (country.borders) {
		// we match the borders and fetch the full string names and push them to countriesArray
		country.borders.forEach((border: any) => {
			allCountries.find((ele: any) => {
				if (border === ele.cca3) {
					countriesArray.push(ele.name.common);
				}
			});
		});

		displayBorderCountries = countriesArray.map((country, index) => {
			return (
				<Link to={`/country/${country}`} className={styles.border_country_span} key={`${country}${index}`}>
					{country}
				</Link>
			);
		});
	}
	return (
		<div className={styles.text_container}>
			<h2 className={styles.title}>{commonName}</h2>

			<div className={styles.inner_text_container}>
				<div className={styles.demographics_container}>
					<p className={styles.native_name}>
						<span className={styles.native_name_span}>Native Name:</span> {nativeName ? nativeNameString : commonName}
					</p>
					<p className={styles.population}>
						<span className={styles.population_span}>Population:</span> {population ? population.toLocaleString() : "-"}
					</p>
					<p className={styles.region}>
						<span className={styles.region_span}>Region:</span> {region}
					</p>
					<p className={styles.subregion}>
						<span className={styles.subregion_span}>Sub Region:</span> {subregion}
					</p>
					<p className={styles.capital}>
						<span className={styles.capital_span}>Capital:</span> {capital}
					</p>
				</div>
				<div className={styles.currency_container}>
					<p className={styles.domain}>
						<span className={styles.domain_span}>Top Level Domain:</span> {tld}
					</p>
					<p className={styles.currencies}>
						<span className={styles.currencies_span}>Currencies:</span> {currency[0][0]}
					</p>
					<p className={styles.languages}>
						<span className={styles.languages_span}>Languages:</span> {String(speakingLanguages)}
					</p>
				</div>
			</div>
			{/* end inner container */}
			<p className={styles.border_countries}>
				<span className={styles.border_span}>Border Countries:</span>
				<span className={styles.display_border_container}>
					{displayBorderCountries ? displayBorderCountries : <span className={styles.display_error}>Server Error, unknown borders</span>}
				</span>
			</p>
		</div>
	);
};

export default TextContainer;
