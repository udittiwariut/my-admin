import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface INITIAL_STATE {
	theme: string;
}

const initialState: INITIAL_STATE = {
	theme: "light",
};

const themeSlice = createSlice({
	name: "theme",
	initialState: initialState,
	reducers: {
		setTheme(state, action: PayloadAction<string>) {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
