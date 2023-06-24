/*==================================================================================
[0] Imports
==================================================================================*/
import { configureStore } from "@reduxjs/toolkit";
import HamburgerReducer from "./features/HamburgerSlice";

/*==================================================================================
[1] Configuration
==================================================================================*/
export const store = configureStore(
    {
        reducer: {
            hamburgerState: HamburgerReducer
        }
    }
);











