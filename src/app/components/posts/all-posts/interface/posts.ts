import { EntityState } from "@ngrx/entity";

export interface PostsState {
    posts: Post[];
    apiPost: APIPost[]
}

// With Adapter
export interface PostsStateAdapter extends EntityState<PostsState> { }

export interface Post {
    id: number;
    title: string;
    description: string;
}

export interface APIPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

