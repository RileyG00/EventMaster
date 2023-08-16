/*==================================================================================
[0] Imports
==================================================================================*/
import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../js/Helpers';


/*==================================================================================
[1] Get Current Login Status
==================================================================================*/
const isLoggedInValue = getCookie(userCredentialName) ? true : false;


/*==================================================================================
[2] Create Slice
==================================================================================*/
const LoginStatus = createSlice({
    name: 'isLoggedIn',
    initialState: {
        isLoggedIn: isLoggedInValue
    },
    reducers: {
        loginUser: (state) => {
            state.isLoggedIn = true
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
        }
    }
});


/*==================================================================================
[3] Exports
==================================================================================*/
export const { loginUser, logoutUser } = LoginStatus.actions;
export default LoginStatus.reducer;

