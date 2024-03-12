import { createReducer, on } from "@ngrx/store"
import { initialPostState } from "./posts.state"
import { addPost, deletePost, loadAPIPostSuccess, updatePost } from "./posts.action"

export const postReducer = createReducer(
    initialPostState,
    on(addPost, (state, action) => {
        const post = {
            ...action.post,
            id: state.posts.length + 1
        }
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        const newPost = [...state.posts];
        const index = newPost.findIndex((res) => res.id === action.id);
        newPost[index] = action.post;
        return {
            ...state,
            posts: newPost
        }
    }),
    on(deletePost, (state, action) => {
        const newPost = [...state.posts];
        newPost.splice(action.index, 1);
        return {
            ...state,
            posts: newPost
        }
    }),

    on(loadAPIPostSuccess, (state, action: any) => {
        return {
            ...state,
            apiPost: action.apiPost
        }
    })
)
