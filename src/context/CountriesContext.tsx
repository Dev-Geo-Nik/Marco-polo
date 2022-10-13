import React, { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";
import { Action } from "./Actions";
import { reducer } from "./CountriesReducer";

export interface CountriesContextState {
	allCountries: any;
	filterByRegion: string;
	currentFilteredCountries: any;
	currentSingleCountry: any;
	searchInputValue: any;
}

const initialState: CountriesContextState = {
	allCountries: [],
	currentSingleCountry: "",
	currentFilteredCountries: [],
	filterByRegion: "",
	searchInputValue: "",
};

type ContextHook = () => {
	state: CountriesContextState;
	dispatch: (action: Action) => void;
};

const CountriesContext = createContext<{
	state: CountriesContextState;
	dispatch: Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => {},
});

//Provider name must start with capital letter
export const CountriesContextProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <CountriesContext.Provider value={{ state, dispatch }}>{children}</CountriesContext.Provider>;
};

//Capitalize the first character after the word use
export const useCountriesContext: ContextHook = () => {
	const { state, dispatch } = useContext(CountriesContext);
	return { state, dispatch };
};
