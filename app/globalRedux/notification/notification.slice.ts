import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { COMPLAINT } from "./../../Types/Notification/Notification";

interface INITIAL_STATE {
	isNotificationOpen: boolean;
	notification: COMPLAINT[];
	notificationBtnRef: any;
}

const initialState: INITIAL_STATE = {
	isNotificationOpen: false,
	notification: [],
	notificationBtnRef: null,
};

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		setIsNotificationOpen(state, action: PayloadAction<boolean>) {
			state.isNotificationOpen = action.payload;
		},
		setComplaints(state, action: PayloadAction<COMPLAINT[]>) {
			state.notification = action.payload;
		},
		setNotificationBtnRef(state, action: PayloadAction<any>) {
			state.notificationBtnRef = action.payload;
		},
	},
});

export const { setIsNotificationOpen, setComplaints, setNotificationBtnRef } =
	notificationSlice.actions;

export default notificationSlice.reducer;
