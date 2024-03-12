import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Post } from "../../posts/all-posts/interface/posts";


// export interface PostsAdapState {
//     postsAdap: Post[];
// }
export interface PostsAdapState extends EntityState<Post> { }



export const postAdapter = createEntityAdapter<Post>();
export const initialPostAdapState: PostsAdapState = postAdapter.getInitialState();