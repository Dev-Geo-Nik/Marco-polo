export enum ActionTypes {
	TEST = "TEST",
	FETCH_ALL_COUNTRIES = "FETCH_ALL_COUNTRIES",
	CURRENT_FILTERED_COUNTRIES = "CURRENT_FILTERED_COUNTRIES",
}

export enum PayloadTypes {}

export interface Action {
	type: ActionTypes;
	payload?: PayloadTypes;
}
