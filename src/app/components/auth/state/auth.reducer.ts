import { createReducer, on } from "@ngrx/store";
import { initialAuthState } from "./auth.state";
import { loginSuccess, signUpSuccess } from "./auth.action";

export const authReducer = createReducer(
    initialAuthState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.data
        }
    }),
    on(signUpSuccess, (state, action) => {
        return {
            ...state,
            user: action.data
        }
    })
);