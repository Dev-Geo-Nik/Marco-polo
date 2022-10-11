import { Action, ActionTypes } from "./Actions";
import { CountriesContextState } from "./CountriesContext";

type ReducerType = (state: CountriesContextState, action: Action) => CountriesContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.TEST:
			return { ...state };
		case ActionTypes.FETCH_ALL_COUNTRIES:
			return {
				...state,
				allCountries: action.payload,
				currentFilteredCountries: action.payload,
			};
		case ActionTypes.CURRENT_FILTERED_COUNTRIES:
			return {
				...state,
				currentFilteredCountries: action.payload,
			};
		default:
			return state;
	}
};
