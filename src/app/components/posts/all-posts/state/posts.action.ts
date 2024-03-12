import { createAction, props } from "@ngrx/store";
import { APIPost, Post } from "../interface/posts";

export const addPost = createAction('addPost', props<{ post: Post }>());
export const updatePost = createAction('updatePost', props<{ post: Post, id: number }>());
export const deletePost = createAction('deletePost', props<{ index: number }>());

export const loadAPIPost = createAction('loadAPIPost');
export const loadAPIPostSuccess = createAction('loadAPIPostSuccess', props<{ apiPost: APIPost[] }>());

export const dummtPostAction = createAction('dummt-post-action');
