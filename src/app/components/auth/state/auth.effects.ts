import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { loginStart, loginSuccess, signUpStart, signUpSuccess } from './auth.action';
import { AuthService } from '../service/auth.service';
import { setErrorMessage, setLoadingSpinner } from '../../shared/state/shared.action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { getUserDetail } from './auth.selector';

const removeActionType = ({ type, ...payload }: any) => payload;

@Injectable()
export class AuthEffects {

    action$ = inject(Actions);
    store = inject(Store);
    authService = inject(AuthService);
    router = inject(Router);

    login$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                action = removeActionType(action);
                console.log('action :>> ', action);
                return this.authService.login(action).pipe(
                    map((res: any) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        this.store.dispatch(setErrorMessage({ message: '' }));
                        return loginSuccess(res);
                    }),
                    catchError((errRes) => {
                        const err = errRes.error.statusCode + ' - ' + errRes.error.message;
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(setErrorMessage({ message: err }));
                    })
                );
            })
        )
    })

    loginRedirect$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(loginSuccess),
                tap(() => {
                    this.router.navigate(['/']);
                    this.store.select(getUserDetail).subscribe((res) => {
                        localStorage.setItem('userDetail', JSON.stringify(res));
                    })
                })
            );
        },
        { dispatch: false }
    );

    signUp$ = createEffect(() => {
        return this.action$.pipe(
            ofType(signUpStart),
            exhaustMap((action) => {
                action = removeActionType(action);
                return this.authService.signUp(action).pipe(
                    map((res: any) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        this.store.dispatch(setErrorMessage({ message: '' }));
                        return signUpSuccess(res);
                    }),
                    catchError((errRes) => {
                        const err = errRes.error.statusCode + ' - ' + errRes.error.message;
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(setErrorMessage({ message: err }));
                    })
                )
            })
        )
    })

    signUpRedirect$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(signUpSuccess),
                tap(() => {
                    this.router.navigate(['/']);
                    this.store.select(getUserDetail).subscribe((res) => {
                        localStorage.setItem('signUpUser', JSON.stringify(res));
                    })
                })
            );
        },
        { dispatch: false }
    );
}