import { createAction, props } from '@ngrx/store';

export const setLoadingSpinner = createAction(
    'set loading spinner',
    props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
    'set error message',
    props<{ message: string }>()
);