import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface INITIAL_STATE {
	auth0_Admin: UserProfile;
	isAdminModalOpen: boolean;
}

const initialState: INITIAL_STATE = {
	auth0_Admin: {},
	isAdminModalOpen: false,
};

const adminSlice = createSlice({
	name: "order",
	initialState: initialState,
	reducers: {
		setAuthZeroAdmin(state, action: PayloadAction<UserProfile>) {
			state.auth0_Admin = action.payload;
		},
		setIsAdminModalOpen(state, action: PayloadAction<boolean>) {
			state.isAdminModalOpen = action.payload;
		},
	},
});

export const { setAuthZeroAdmin, setIsAdminModalOpen } = adminSlice.actions;
export default adminSlice.reducer;
