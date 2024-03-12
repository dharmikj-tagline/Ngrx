import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { exhaustMap, Observable, tap, map, catchError } from 'rxjs';
import { UserService } from '../service/user.service';
import { UserDetailComponentState, UserList } from '../interface/users';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';

@Injectable()
export class UserDetailStore extends ComponentStore<UserDetailComponentState> {
    private router = inject(ActivatedRoute);
    private userDetail$ = this.select((state) => state.userDetail);

    public getUserDetailVW = this.select({
        userDetail: this.userDetail$
    })

    private setUserDetail(newUserDetail: any) {
        this.setState({
            userDetail: newUserDetail
        });
    }

    public getUsersDetail = this.effect((trigger$) => {
        return trigger$.pipe(
            exhaustMap(() => {
                return this.userService.getUsersById(this.router.snapshot.params['id']).pipe(
                    tap((res: any) => this.setUserDetail(res))
                )
            })
        )
    })

    constructor(private userService: UserService) {
        super({
            userDetail: null,
        });
    }
}