import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ORDER_ITEM, ORDER } from "./../../Types/Order/Order";

interface INITIAL_STATE {
	orders: ORDER[] | [];
	selectedOrder: string;
}

const initialState: INITIAL_STATE = {
	orders: [],
	selectedOrder: "",
};

const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setOrders(state, action: PayloadAction<ORDER[]>) {
			state.orders = action.payload;
		},
		setSelectedOrder(state, action: PayloadAction<string>) {
			state.selectedOrder = action.payload;
		},
	},
});

export const { setOrders, setSelectedOrder } = orderSlice.actions;

export default orderSlice.reducer;
