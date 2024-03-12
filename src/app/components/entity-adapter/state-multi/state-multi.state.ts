import { createEntityAdapter } from "@ngrx/entity";

export const adapterInternationalTeam = createEntityAdapter();
export const adapterPlace = createEntityAdapter();

const internationalTeamInitialState = adapterInternationalTeam.getInitialState();
const placeInitialState = adapterPlace.getInitialState();

export const initialMultiState = {
    internationalTeam: internationalTeamInitialState,
    places: placeInitialState,
};
