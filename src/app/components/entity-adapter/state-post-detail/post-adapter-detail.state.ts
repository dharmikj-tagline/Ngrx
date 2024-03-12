import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Post } from "../../posts/all-posts/interface/posts";

export interface PostsDetailAdapState extends EntityState<Post> { }

export const postDetailAdapter = createEntityAdapter<any>();
export const initialPostDetailAdapState: PostsDetailAdapState = postDetailAdapter.getInitialState();