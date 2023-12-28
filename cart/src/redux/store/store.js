import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slice/CartSlice";
import UserSlice from "../slice/UserSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice,
        user: UserSlice
    }
})

export default store;