import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { PostsService } from '../../posts/all-posts/service/posts.service';
import { Store } from '@ngrx/store';
import { getCurrentRoute } from '../../store/router/router.selector';
import { loadAdapPostDetail, loadAdapPostDetailSuccess } from './post-adapter-detail.action';
import { of } from 'rxjs';
import { dummyAction } from '../state/post-adapter.action';
import { getAPIAdapPostDetail } from './post-adapter-detail.selector';

@Injectable()
export class PostsAdapterDetailEffects {

    private actions$ = inject(Actions);
    private store = inject(Store);
    private postsService = inject(PostsService);

    loadAdapPostDetail$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAdapPostDetail),
            withLatestFrom(this.store.select(getAPIAdapPostDetail)),
            //  if (!posts.length)
            mergeMap((data: any) => {
                const dataId = data[1][0]?.id;
                let id: number = 0;
                this.store.select(getCurrentRoute).subscribe(res => {
                    id = parseInt(res.params.id);
                })
                if (dataId != id) {
                    return this.postsService.getPostsById(id).pipe(
                        map((detail) => {
                            const postsAdapDetail = [detail];
                            return loadAdapPostDetailSuccess({ postsAdapDetail });
                        })
                    );
                }
                return of(dummyAction());
            })
        );
    });
}