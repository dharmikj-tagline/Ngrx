import { createReducer, on } from "@ngrx/store";
import { adapterInternationalTeam, initialMultiState } from "./state-multi.state";
import { loadInternationalTeamSuccess } from "./state-multi.action";

export const stateMultiReducer = createReducer(
    initialMultiState,
    on(loadInternationalTeamSuccess, (state, action) => {
        return {
            ...state,
            internationalTeam: adapterInternationalTeam.setAll(action.internationalTeam, state.internationalTeam)
        }
    })
)
