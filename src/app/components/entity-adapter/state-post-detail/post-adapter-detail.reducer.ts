import { createReducer, on } from "@ngrx/store";
import { initialPostDetailAdapState, postDetailAdapter } from "./post-adapter-detail.state";
import { loadAdapPostDetailSuccess } from "./post-adapter-detail.action";

export const postsAdapDetailReducer = createReducer(
    initialPostDetailAdapState,
    on(loadAdapPostDetailSuccess, (state, action) => {
        return postDetailAdapter.setAll(action.postsAdapDetail, state);
    })
)
