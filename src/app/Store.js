/*==================================================================================
[0] Imports
==================================================================================*/
import { configureStore } from "@reduxjs/toolkit";
import BlobSliceXReducer from "./features/BlobSliceX";


/*==================================================================================
[1] Configuration
==================================================================================*/
export const store = configureStore({
    reducer: {
        BlobSliceX: BlobSliceXReducer
    }
});












