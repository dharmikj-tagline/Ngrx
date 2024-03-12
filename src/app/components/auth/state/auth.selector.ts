import { createFeatureSelector, createSelector } from '@ngrx/store';

const getAuthState = createFeatureSelector('auth');

export const isAuthenticated = createSelector(getAuthState, (state: any) => {
    return state.user ? true : false;
});

export const getUserDetail = createSelector(getAuthState, (state: any) => {
    return state.user;
});