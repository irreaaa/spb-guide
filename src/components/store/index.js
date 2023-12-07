import {configureStore} from "@reduxjs/toolkit";
// import userReducer from './slices/userSlise'
import attractionReducer from "./slices/attractionsSlice" 
// import { hotelReducer } from "../../reduxStore/hotelReducer";
// import tourReducer from "../../reduxStore/tourReducer";
// import personalAccountSlice from "./slices/personalAccountSlice";
export const store = configureStore({
        reducer: {
            attractions: attractionReducer
        }
    }
)