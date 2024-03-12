import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { counterReducer } from './components/counter/state/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './components/auth/state/auth.effects';
import { postReducer } from './components/posts/all-posts/state/posts.reducer';
import { postsAdapReducer } from './components/entity-adapter/state/posts-adapter.reducer';
import { PostsAdapterEffects } from './components/entity-adapter/state/posts-adapter.effects';
import { PostsEffects } from './components/posts/all-posts/state/posts.effects';
import { postsAdapDetailReducer } from './components/entity-adapter/state-post-detail/post-adapter-detail.reducer';
import { PostsAdapterDetailEffects } from './components/entity-adapter/state-post-detail/post-adapter-detail.effects';
import { StateMultiEffects } from './components/entity-adapter/state-multi/state-multi.effects';
import { stateMultiReducer } from './components/entity-adapter/state-multi/state-multi.reducer';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home/home.component').then((c) => c.HomeComponent),
    },
    {
        path: 'counter',
        loadComponent: () => import('./components/counter/counter/counter.component').then((c) => c.CounterComponent),
        providers: [
            provideState({ name: 'counter', reducer: counterReducer })
        ]
    },
    {
        path: 'posts',
        loadComponent: () => import('./components/posts/all-posts/components/posts-list/post-list.component').then((c) => c.PostListComponent),
        providers: [
            provideState({ name: 'posts', reducer: postReducer }),
            provideEffects([PostsEffects])
        ]
    },
    {
        path: 'posts-adapter',
        loadComponent: () => import('./components/entity-adapter/components/post-adapter/post-adapter.component').then((c) => c.PostAdapterComponent),
        providers: [
            provideState({ name: 'postsAdap', reducer: postsAdapReducer }),
            provideEffects([PostsAdapterEffects])
        ]
    },
    {
        path: 'posts-adapter/multi',
        loadComponent: () => import('./components/entity-adapter/components/multiple-entity/multiple-entity.component').then((c) => c.MultipleEntityComponent),
        providers: [
            provideState({ name: 'multiAdapter', reducer: stateMultiReducer }),
            provideEffects([StateMultiEffects])
        ]
    },
    {
        path: 'posts-adapter/detail/:id',
        loadComponent: () => import('./components/entity-adapter/components/get-post-adap-detail/get-post-adap-detail.component').then((c) => c.GetPostAdapDetailComponent),
        providers: [
            provideState({ name: 'postDetailAdapter', reducer: postsAdapDetailReducer }),
            provideEffects([PostsAdapterDetailEffects])
        ]
    },
    {
        path: 'posts/post-detail/:postId',
        loadComponent: () => import('./components/posts/all-posts/components/post-detail/post-detail.component').then((c) => c.PostDetailComponent),
    },
    {
        path: 'user-list',
        loadComponent: () => import('./components/component-store/components/user-list/user-list.component').then((c) => c.UserListComponent),
    },
    {
        path: 'user-detail/:id',
        loadComponent: () => import('./components/component-store/components/user-detail/user-detail.component').then((c) => c.UserDetailComponent),
    },
    {
        path: 'signal',
        loadComponent: () => import('./components/signals/components/counter/counter.component').then((c) => c.CounterComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('./components/auth/login/login.component').then((c) => c.LoginComponent),
    },
    {
        path: 'sign-up',
        loadComponent: () => import('./components/auth/sign-up/sign-up.component').then((c) => c.SignUpComponent),
        providers: [
            provideEffects([AuthEffects])
        ]
    }
];
