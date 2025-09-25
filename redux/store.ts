import { configureStore } from '@reduxjs/toolkit'
import userReducer from "@/redux/reducers/user.reducer";
import cartReducer from "@/redux/reducers/cart.reducer";

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            cart: cartReducer,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
