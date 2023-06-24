/*==================================================================================
[0] Imports
==================================================================================*/
import {createSlice} from "@reduxjs/toolkit";


/*==================================================================================
[1] Create Initial State
==================================================================================*/
const initialState = {
    isActive: false
}


/*==================================================================================
[2] Export Final
==================================================================================*/
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
