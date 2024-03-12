import { createReducer, on } from "@ngrx/store";
import { initialPostAdapState, postAdapter } from "./posts-adapter.state";
import { loadAdapPostsSuccess } from "./post-adapter.action";

export const postsAdapReducer = createReducer(
    initialPostAdapState,
    // on(loadAdapPostsSuccess, (state, action) => {
    //     return {
    //         ...state,
    //         postsAdap: action.postsAdap
    //     };
    // })
    on(loadAdapPostsSuccess, (state, action) => {
        return postAdapter.setAll(action.postsAdap, state);
    }),

    // on(loadAdapPostDetailSuccess, (state, action: any) => {
    //     console.log('action :>> ', action);
    //     return {
    //         ...state,
    //         postsAdapDetail: action.postsAdapDetail
    //     };
    //     // return postAdapter.setAll(action.postsAdapDetail, state);
    // })


    // on(addPost, (state, action) => {
    //     const post = {
    //         ...action.post,
    //         id: state.posts.length + 1
    //     }
    //     return {
    //         ...state,
    //         posts: [...state.posts, post]
    //     }
    // }),
    // ---------------------------------------------

    // on(addPostSuccess, (state, action) => {
    //     return postsAdapter.addOne(action.post, state);
    // }),


    // on(updatePost, (state, action) => {
    //     const newPost = [...state.posts];
    //     const index = newPost.findIndex((res) => res.id === action.id);
    //     newPost[index] = action.post;
    //     return {
    //         ...state,
    //         posts: newPost
    //     }
    // }),
    // ---------------------------------------------

    // on(updatePostSuccess, (state, action) => {
    //     return postsAdapter.updateOne(action.post, state);
    //   }),


    // on(deletePost, (state, action) => {
    //     const newPost = [...state.posts];
    //     newPost.splice(action.index, 1);
    //     return {
    //         ...state,
    //         posts: newPost
    //     }
    // })
    // ---------------------------------------------

    // on(deletePostSuccess, (state, { id }) => {
    //     return postsAdapter.removeOne(id, state);
    // }),
)