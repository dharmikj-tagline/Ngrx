import { createFeatureSelector, createSelector } from "@ngrx/store";

const getSharedState = createFeatureSelector('shared');

export const getLoading = createSelector(getSharedState, (state: any) => {
    return state.showLoading;
})

export const getErrorMessage = createSelector(getSharedState, (state: any) => {
    return state.message;
})