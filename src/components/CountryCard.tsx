import styles from "./countryCard.module.scss";
interface Props {
	country: any;
}
const CountryCard: React.FC<Props> = ({ country }) => {
	// console.log(typeof country.population);

	let displayCountry = (
		<div className={styles.country_container} key={`${country.name.common} ${country.population}`}>
			<div className={styles.flag_container}>
				<img src={country.flags.png} alt="" className={styles.image} />
			</div>
			<div className={styles.text_container}>
				<h2 className={styles.title}>{country.name.common}</h2>
				<p className={styles.population}>
					<span className={styles.population_span}>Population:</span> {country.population ? country.population.toLocaleString() : "-"}
				</p>
				<p className={styles.region}>
					<span className={styles.region_span}>Region:</span> {country.region ? country.region : "-"}
				</p>
				<p className={styles.capital}>
					<span className={styles.capital_span}>Capital:</span> {country.capital ? country.capital : "-"}
				</p>
			</div>
		</div>
	);

	return <>{displayCountry}</>;
};

export default CountryCard;
