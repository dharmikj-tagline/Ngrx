import { createReducer, on } from '@ngrx/store';
import { initialSharedState } from './shared.state';
import { setErrorMessage, setLoadingSpinner } from './shared.action';

export const sharedReducer = createReducer(
    initialSharedState,
    on(setLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.status,
        };
    }),
    on(setErrorMessage, (state, action) => {
        return {
            ...state,
            message: action.message,
        };
    })
);
