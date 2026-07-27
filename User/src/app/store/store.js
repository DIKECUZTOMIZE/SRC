import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../../feature/public/auth/state/authSlice.jsx'
export const store = configureStore(
    {
        reducer: {
            auth: authReducer
        }
    }
) 