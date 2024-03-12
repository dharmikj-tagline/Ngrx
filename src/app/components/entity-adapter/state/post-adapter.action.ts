import { createAction, props } from "@ngrx/store";
import { Post } from "../../posts/all-posts/interface/posts";

export const loadAdapPosts = createAction('load-adapter-post');
export const loadAdapPostsSuccess = createAction('load-adapter-post-success', props<{ postsAdap: Post[] }>());

export const dummyAction = createAction('dummy-action');
