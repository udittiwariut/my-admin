import React from "react";
import style from "./PageLayout.module.scss";
import Providers from "@/app/globalRedux/provider";
import SideBar from "../side-bar/SideBar";
import VerticalDivider from "../../atom/verticalDivider/VerticalDivider";
import NavBar from "../nav-bar/NavBar";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import NotificationBar from "../notificationBar/NotificationBar";
import Preloader from "@/app/globalRedux/Preloader";
import store from "@/app/globalRedux/store";
import { setOrders } from "@/app/globalRedux/orders/order.slice";
import { COLLECTION, getFireStoreData } from "@/app/utlis/firebase/fireStore";
import { ORDER, ORDER_ITEM } from "@/app/Types/Order/Order";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
	const orders: any = await getFireStoreData(COLLECTION.ORDER);
	const shortedOrder = orders.map((order: ORDER) => {
		const oderObj = {
			order_id: order.order_id,
			customer_name: order.customer_name,
			customer_email: order.customer_email,
			order_date: order.order_date,
			order_total: order.order_total,
			order_items: order.order_items.map((orderItem: ORDER_ITEM) => {
				const objItem = {
					product_id: orderItem.product_id,
					product_name: orderItem.product_name,
					quantity: orderItem.quantity,
					unit_price: orderItem.unit_price,
					subtotal: orderItem.subtotal,
				};
				return objItem;
			}),
		};
		return oderObj;
	});
	shortedOrder.sort(
		(a: any, b: any) => a.order_id.slice(-2) * 1 - b.order_id.slice(-2) * 1
	);

	store.dispatch(setOrders(shortedOrder));

	return (
		<>
			<Preloader order={shortedOrder} />
			<Providers>
				<div className={style.app}>
					<div className={style.body}>
						<div className={style.layout_left}>
							<SideBar />
							<VerticalDivider className={style.vertical_divider} />
						</div>
						<div className={style.layout_right}>
							<NavBar />
							<HorizontalDivider className={style.horizontal_divider} />
							<div className={style.children}>{children}</div>
						</div>
					</div>
					<NotificationBar />
				</div>
			</Providers>
		</>
	);
};

export default PageLayout;
