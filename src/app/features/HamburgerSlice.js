import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isActive: false
}


export const hamBurgerState = createSlice({
    name: "hamBurgerState",
    initialState,
    reducers: {
        toggleState: (state) => {
            state.isActive = !state.isActive;
        }
    }
});


export const {toggleState} = hamBurgerState.actions;

export default hamBurgerState.reducer;
