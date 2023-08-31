import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "./notification/notification.slice";
import OrderReducer from "./orders/order.slice";
import AdminReducer from "./admin/admin.slice";
import userReducer from "./user/user.slice";
import productReducer from "./product/product.slice";

const store = configureStore({
	reducer: {
		notification: NotificationReducer,
		orders: OrderReducer,
		Admin: AdminReducer,
		product: productReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
