import { createAction, props } from "@ngrx/store";
import { Post } from "../../posts/all-posts/interface/posts";

export const loadAdapPostDetail = createAction('load-adapter-post-detail');
export const loadAdapPostDetailSuccess = createAction('load-adapter-post-detail-success', props<{ postsAdapDetail: Post[] }>());
