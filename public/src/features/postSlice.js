import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: [],
    },
    reducers: {
        addPost: (state, action) => {
            state.value.unshift(action.payload)
        },
        addAllPost: (state, action) => {
            state.value = action.payload;
        },
        clearPosts: (state) => {
            state.value = '';
        },
    }
})

export default postSlice.reducer;
export const {addPost, addAllPost, clearPosts} = postSlice.actions;
export const postState = (state) => state.post.value;