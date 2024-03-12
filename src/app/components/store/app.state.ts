import { RouterReducerState } from "@ngrx/router-store";
import { CounterState } from "../interface/counter";
import { PostsState } from "../posts/all-posts/interface/posts";

export interface AppState {
    counter: CounterState,
    posts: PostsState,
    router: RouterReducerState
}