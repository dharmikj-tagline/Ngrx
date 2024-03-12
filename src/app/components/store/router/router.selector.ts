import { createFeatureSelector, createSelector } from "@ngrx/store";

const routerState = createFeatureSelector('router');

export const getCurrentRoute = createSelector(routerState, (router: any) => {
    return router && router.state;
})