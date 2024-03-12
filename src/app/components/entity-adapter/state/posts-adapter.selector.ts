import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsAdapState, postAdapter } from "./posts-adapter.state";

const getPostsAdapState = createFeatureSelector<PostsAdapState>('postsAdap');

// export const getAPIAdapPosts = createSelector(getPostsAdapState, (state) => {
//     return state.postsAdap;
// });

export const postsSelectors = postAdapter.getSelectors();

export const getAPIAdapPosts = createSelector(getPostsAdapState, postsSelectors.selectAll);
export const getAPIAdapPostsEntity = createSelector(getPostsAdapState, postsSelectors.selectEntities);
export const getAPIAdapPostsId = createSelector(getPostsAdapState, postsSelectors.selectIds);
export const getAPIAdapPostsTotal = createSelector(getPostsAdapState, postsSelectors.selectTotal);

