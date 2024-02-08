import { apiSlice } from "@/features/api/apiSlice";
import authReducer from "@/features/auth/authSlice";
import inspectionReducer from "@/features/Inspection/inspectionSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    inspection: inspectionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
