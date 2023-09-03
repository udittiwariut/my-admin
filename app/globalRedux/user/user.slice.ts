import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type USER from "@/app/Types/User/User";

interface INITIAL_STATE {
	user: USER[] | [];
}

const initialState: INITIAL_STATE = {
	user: [],
};

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		setUser(state, action: PayloadAction<USER[]>) {
			state.user = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
