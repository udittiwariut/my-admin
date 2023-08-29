import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	isNotificationOpen: false,
};

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		setIsNotificationOpen(state, action: PayloadAction<boolean>) {
			state.isNotificationOpen = action.payload;
		},
	},
});

export const { setIsNotificationOpen } = notificationSlice.actions;

export default notificationSlice.reducer;
