import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterStateUrl } from "src/app/components/store/router/custom-serialize";
import { getCurrentRoute } from "src/app/components/store/router/router.selector";
import { Post } from "../interface/posts";

const getPostsState = createFeatureSelector('posts');

export const getPosts = createSelector(getPostsState, (state: any) => {
    return state.posts;
})

export const getAPIPosts = createSelector(getPostsState, (state: any) => {
    return state.apiPost;
})

export const getPostById = createSelector(
    getPosts,
    getCurrentRoute,
    (posts, route: RouterStateUrl) => {
        return posts ? posts.find((post: Post) => post.id === parseInt(route.params['postId'])) : {};
    }
);