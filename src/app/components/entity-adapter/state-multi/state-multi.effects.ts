import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommonService } from '../../shared/service/common.service';
import { loadInternationalTeam, loadInternationalTeamSuccess } from './state-multi.action';
import { setErrorMessage, setLoadingSpinner } from '../../shared/state/shared.action';
import { of } from 'rxjs';

@Injectable()
export class StateMultiEffects {

    private actions$ = inject(Actions);
    private store = inject(Store);
    private commonService = inject(CommonService);

    loadInternationalTeam$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadInternationalTeam),
            mergeMap((data) => {
                return this.commonService.getInternational().pipe(
                    map((team: any) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const internationalTeam = team.list.map((res: any, i: number) => ({ ...res, id: i + 1 }));
                        console.log('internationalTeam =====:>> ', internationalTeam);
                        return loadInternationalTeamSuccess({ internationalTeam });
                    }),
                    catchError((err) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(setErrorMessage({ message: err.error.message }));
                    })
                )
            })
        )
    })
}