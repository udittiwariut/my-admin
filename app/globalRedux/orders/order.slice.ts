import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ORDER_ITEM, ORDER } from "./../../Types/Order/Order";

interface INITIAL_STATE {
	orders: ORDER[] | [];
}

const initialState: INITIAL_STATE = {
	orders: [],
};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setOrders(state, action: PayloadAction<ORDER[]>) {
			state.orders = action.payload;
		},
	},
});

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;
