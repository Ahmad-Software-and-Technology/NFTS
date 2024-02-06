
import { configureStore } from "@reduxjs/toolkit"
import walletReducer from "./slicers/connectionSlicer"
export const store = configureStore({
    reducer:{
        address:walletReducer
    }
})
