import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, tap } from 'rxjs';
import { UserService } from '../service/user.service';
import { UserComponentState, UserList } from '../interface/users';

@Injectable()
export class UserStore extends ComponentStore<UserComponentState> {

    setUserList = this.updater((state, users: UserList[]) => ({
        ...state,
        isLoading: false,
        users
    }));

    setIsLoading = this.updater((state) => ({ ...state, isLoading: true }));

    setErrorMsg = this.updater((state, error: HttpErrorResponse) => ({
        ...state,
        isLoading: false,
        error: error.message
    }));

    addNewUser = this.updater((state, user: UserList) => ({
        ...state,
        isLoading: false,
        users: [...state.users, user]
    }));

    // Patch State Method

    // patchStateMethod = this.patchState((state) => ({
    //     ...state,
    //     isLoading: true,
    // }));

    getUsers = this.effect((trigger$) => {
        return trigger$.pipe(
            tap(() => {
                this.setIsLoading();
            }),
            exhaustMap(() => {
                return this.userService.getUsers().pipe(
                    tapResponse(
                        (res: UserList[]) => this.setUserList(res),
                        (err: HttpErrorResponse) => this.setErrorMsg(err)
                    )
                );
            })
        );
    });

    createPost = this.effect((user$: Observable<UserList>) => {
        return user$.pipe(
            tap(() => {
                this.setIsLoading();
            }),
            exhaustMap((userDetail) => {
                return this.userService.createUsers(userDetail).pipe(
                    tapResponse(
                        (user: any) => this.addNewUser(user),
                        (err: HttpErrorResponse) => this.setErrorMsg(err)
                    )
                );
            })
        );
    });

    // Read and Get Value 
    private isLoading$ = this.select((state) => state.isLoading);
    private error$ = this.select((state) => state.error);
    private users$ = this.select((state) => state.users);

    // Create One Modal For Accessing value in Component
    public userViewModal = this.select({
        isLoading: this.isLoading$,
        error: this.error$,
        users: this.users$,
    })

    constructor(private userService: UserService) {
        // Set Initial Value
        super({
            isLoading: false,
            error: null,
            users: [],
        });
    }
}