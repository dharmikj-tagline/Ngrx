import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapterInternationalTeam } from "./state-multi.state";

const getPostsAdapState = createFeatureSelector<any>('multiAdapter');

// export const getAPIAdapPosts = createSelector(getPostsAdapState, (state) => {
//     return state.postsAdap;
// });

export const internationalSelectors = adapterInternationalTeam.getSelectors();

// export const getInternationalTeam1 = createSelector(getPostsAdapState, (state) => state && state.internationalTeams && state.internationalTeams);

export const selectInternationalTeamState = createSelector(getPostsAdapState, (state) => state.internationalTeam);
export const selectAllInternationalTeams = adapterInternationalTeam.getSelectors(selectInternationalTeamState).selectAll;