import { Link, Navigate, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { useCountriesContext } from "../../context/CountriesContext";
import styles from "./countrySinglePage.module.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CountrySinglePage: React.FC = () => {
	const {
		state: { allCountries },
	} = useCountriesContext();

	const { pathname } = useLocation();
	const countryName = pathname.split("/")[2];

	const country = allCountries.find((ele: any) => ele.name.common === countryName);

	if (!country) {
		// todo add notfound error page
		return <Navigate to="/" state={{ from: pathname }} replace />;
	}

	const {
		population,
		subregion,
		flags,
		region,
		capital,
		tld,
		name: { common: commonName },
		currencies,
		languages,
	} = country;

	let nativeName: any = Object.entries(country.name.nativeName);
	let nativeNameString = nativeName[0][1].common;

	const currency = Object.entries(currencies);
	let speakingLanguages = Object.values(languages).map((language: any) => {
		return language;
	});

	let countriesArray: string[] = [];
	let displayBorderCountries;

	if (country.borders) {
		country.borders.forEach((border: any) => {
			allCountries.find((ele: any) => {
				if (border === ele.cca3) {
					countriesArray.push(ele.name.common);
				}
			});
		});

		displayBorderCountries = countriesArray.map((country, index) => {
			return (
				<span className={styles.border_country_span} key={`${country}${index}`}>
					{country}
				</span>
			);
		});
	}

	return (
		<div className={styles.country_container}>
			<Header />
			<Link to="/" className={styles.arrow_container}>
				<FaLongArrowAltLeft className={styles.arrow} />
				<span className={styles.arrow_text}>Back</span>
			</Link>
			<div className={styles.context_container}>
				<div className={styles.flag_container}>
					<img src={flags.svg} alt="" className={styles.flag_image} />
				</div>
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
						{displayBorderCountries ? displayBorderCountries : "Server Error, unknown borders"}
					</p>
				</div>
				{/* end text container*/}
			</div>
		</div>
	);
};

export default CountrySinglePage;
