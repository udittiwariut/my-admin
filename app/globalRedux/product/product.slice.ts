import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PRODUCT } from "@/app/Types/Product/Product";

interface INITIAL_STATE {
	product: PRODUCT[] | [];
}

const initialState: INITIAL_STATE = {
	product: [],
};

const productSlice = createSlice({
	name: "product",
	initialState: initialState,
	reducers: {
		setProduct(state, action: PayloadAction<PRODUCT[]>) {
			state.product = action.payload;
		},
	},
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
