import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postDetailAdapter } from "./post-adapter-detail.state";

const getPostsDetailAdapState = createFeatureSelector<any>('postDetailAdapter');
export const postsDetailSelectors = postDetailAdapter.getSelectors();
export const getAPIAdapPostDetail = createSelector(getPostsDetailAdapState, postsDetailSelectors.selectAll);
