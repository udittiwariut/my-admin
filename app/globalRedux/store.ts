"use client";

import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "./notification/notification.slice";

const store = configureStore({
	reducer: {
		notification: NotificationReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
