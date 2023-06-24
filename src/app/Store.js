/*==================================================================================
[0] Imports
==================================================================================*/
import { configureStore } from "@reduxjs/toolkit";
import HamburgerSlice from "./features/HamburgerSlice";
import LoginStatusSlice from "./features/LoginStatusSlice";

/*==================================================================================
[1] Configuration
==================================================================================*/
export const store = configureStore(
    {
        reducer: {
            hamburgerState: HamburgerSlice,
            LoginState: LoginStatusSlice
        }
    }
);











