/*==================================================================================
[0] Imports
==================================================================================*/
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../js/Helpers";


/*==================================================================================
[1] Create Inital State
==================================================================================*/
let isLoggedIn = getCookie("userid");

isLoggedIn = isLoggedIn ? true : false;

const initialState = {
    isLoggedIn: isLoggedIn
}


/*==================================================================================
[2] Export Final
==================================================================================*/
export const loginStatus = createSlice({
    name: "loginStatus",
    initialState,
    reducers: {
        loginUser: (state) => {
            state.isLoggedIn = true
        },
        logoutUser: (state) => {
            state.isLoggedIn = false
        }
    }
});

export const {loginUser, logoutUser} = loginStatus.actions;
export default loginStatus.reducer;
