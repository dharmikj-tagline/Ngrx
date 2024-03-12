import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { PostsService } from '../../posts/all-posts/service/posts.service';
import { dummyAction, loadAdapPosts, loadAdapPostsSuccess } from './post-adapter.action';
import { Store } from '@ngrx/store';
import { getAPIAdapPosts } from './posts-adapter.selector';
import { of } from 'rxjs';

@Injectable()
export class PostsAdapterEffects {

    private actions$ = inject(Actions);
    private store = inject(Store);
    private postsService = inject(PostsService);

    loadAdapPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadAdapPosts),
            withLatestFrom(this.store.select(getAPIAdapPosts)),
            // concatLatestFrom(() => this.store.select(getAPIAdapPosts)),
            mergeMap(([id, posts]) => {
                console.log('posts :>> ', posts);
                if (!posts.length)
                    return this.postsService.getPostsList().pipe(
                        map((postsAdap) => {
                            return loadAdapPostsSuccess({ postsAdap });
                        })
                    );
                return of(dummyAction());
            })
        );
    });

    //   addPost$ = createEffect(() => {
    //     return this.actions$.pipe(
    //       ofType(addPost),
    //       mergeMap((action) => {
    //         return this.postsService.addPost(action.post).pipe(
    //           map((data) => {
    //             const post = { ...action.post, id: data.name };
    //             return addPostSuccess({ post });
    //           })
    //         );
    //       })
    //     );
    //   });
    // ---------------------------------------------

    // addPost$ = createEffect(() => {
    //     return this.actions$.pipe(
    //       ofType(addPost),
    //       mergeMap((action) => {
    //         return this.postsService.addPost(action.post).pipe(
    //           map((data) => {
    //             const post = { ...action.post, id: data.name };
    //             return addPostSuccess({ post });
    //           })
    //         );
    //       })
    //     );
    //   });



    //   updatePost$ = createEffect(() => {
    //     return this.actions$.pipe(
    //       ofType(updatePost),
    //       switchMap((action) => {
    //         return this.postsService.updatePost(action.post).pipe(
    //           map((data) => {
    //             return updatePostSuccess({ post: action.post });
    //           })
    //         );
    //       })
    //     );
    //   });
    // ---------------------------------------------

    //   updatePost$ = createEffect(() => {
    //     return this.actions$.pipe(
    //       ofType(updatePost),
    //       switchMap((action) => {
    //         return this.postsService.updatePost(action.post).pipe(
    //           map((data) => {
    //             const updatedPost: Update<Post> = {
    //                 id: action.post.id,
    //                 changes: {
    //                     ...action.post,
    //                 },
    //              };
    //             return updatePostSuccess({ post: updatedPost });
    //           })
    //         );
    //       })
    //     );
    //   });


    //   deletePost$ = createEffect(() => {
    //     return this.actions$.pipe(
    //       ofType(deletePost),
    //       switchMap((action) => {
    //         return this.postsService.deletePost(action.id).pipe(
    //           map((data) => {
    //             return deletePostSuccess({ id: action.id });
    //           })
    //         );
    //       })
    //     );
    //   });
    // ---------------------------------------------

    // deletePost$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(deletePost),
    //         switchMap((action) => {
    //             return this.postsService.deletePost(action.id).pipe(
    //                 map((data) => {
    //                     return deletePostSuccess({ id: action.id });
    //                 })
    //             );
    //         })
    //     );
    // });

}