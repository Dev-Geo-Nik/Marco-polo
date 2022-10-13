import { Link, Navigate, useLocation } from "react-router-dom";

import styles from "./countrySinglePage.module.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useCountriesContext } from "../../../context/CountriesContext";
import Header from "../../../components/Header";
import TextContainer from "./components/TextContainer";

const CountrySinglePage: React.FC = () => {
	const {
		dispatch,
		state: { allCountries },
	} = useCountriesContext();

	const { pathname } = useLocation();
	const countryName = pathname.split("/")[2];
	// find out which country
	const country = allCountries.find((ele: any) => ele.name.common === countryName);

	// if no country redirect
	if (!country) {
		// todo add notfound error page
		return <Navigate to="/" state={{ from: pathname }} replace />;
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
					<img src={country.flags.svg} alt="" className={styles.flag_image} />
				</div>
				<TextContainer country={country} allCountries={allCountries} />
			</div>
		</div>
	);
};

export default CountrySinglePage;
