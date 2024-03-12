import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "../service/posts.service";
import { dummtPostAction, loadAPIPost, loadAPIPostSuccess } from "./posts.action";
import { map, mergeMap, of, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { getAPIPosts } from "./posts.selector";

@Injectable()
export class PostsEffects {
    private action$ = inject(Actions);
    private store = inject(Store);
    private postService = inject(PostsService);

    loadAPIPost$ = createEffect(() => {
        return this.action$.pipe(
            ofType(loadAPIPost),
            withLatestFrom(this.store.select(getAPIPosts)),
            mergeMap(([id, posts]) => {
                if (!posts.length)
                    return this.postService.getPostsList().pipe(
                        map((posts) => {
                            return loadAPIPostSuccess({ apiPost: posts });
                        })
                    );
                return of(dummtPostAction())
            })
        );
    });
}