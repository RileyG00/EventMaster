import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    xPosition: 0
}


export const BlobSliceX = createSlice({
    name: "BlobPositionX",
    initialState,
    reducers: {
        increment: (state) => {
            state.xPosition += 1;
        },
        decrement: (state) => {
            state.xPosition -= 1;
        }
    }
});


export const {increment, decrement} = BlobSliceX.actions;

export default BlobSliceX.reducer;
