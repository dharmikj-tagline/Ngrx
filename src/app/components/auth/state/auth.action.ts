import { createAction, props } from "@ngrx/store";

export const loginStart = createAction('login start', props<{ email: string, password: string }>());
export const loginSuccess = createAction('login success', props<{ data: any, message: string, statusCode: number }>());

export const signUpStart = createAction('signup start', props<{ name: string, email: string, password: string, role: string }>());
export const signUpSuccess = createAction('signup success', props<{ data: any, message: string, statusCode: number }>());