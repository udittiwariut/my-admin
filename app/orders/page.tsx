"use client";
import React, { useEffect, useState } from "react";
import style from "./orders.module.scss";
import OrderCard from "../component/organisms/order_card/OrderCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../globalRedux/store";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import { setSelectedOrder } from "../globalRedux/orders/order.slice";
import { log } from "console";
import classHelperFn from "../utlis/functions/themeClass";

let timeOut: string | number | NodeJS.Timeout | undefined;

let delay = 300;

const Orders = () => {
	const theme = useSelector((state: RootState) => state.theme.theme);

	const orderMain = document.getElementById("children");
	const dispatch = useDispatch();
	const [showDetail, setShowDetail] = useState<null | number>(null);
	const orders = useSelector((state: RootState) => state.orders.orders);
	const selectedOrder = useSelector(
		(state: RootState) => state.orders.selectedOrder
	);

	console.log(selectedOrder);

	const url = useSearchParams();

	const orderId = url.get("orderId");

	const dispatcher = () => {
		dispatch(setSelectedOrder(""));
	};

	useEffect(() => {
		const debounce = () => {
			clearTimeout(timeOut);
			timeOut = setTimeout(() => {
				dispatcher();
			}, delay);
		};
		orderMain?.addEventListener("scroll", debounce);
		return () => {
			orderMain?.removeEventListener("scroll", debounce);
		};
	}, []);

	useEffect(() => {
		const scrollToDiv = document.getElementById(selectedOrder);
		scrollToDiv && scrollToDiv.scrollIntoView({ behavior: "smooth" });
	}, [orderId, selectedOrder]);

	return (
		<div className={classHelperFn(style.base, theme, style)} id="orderMain">
			{orders.length &&
				orders.map((order, i) => (
					<OrderCard
						key={order.order_id}
						order={order}
						setShowDetail={setShowDetail}
						showDetail={showDetail}
						index={i}
					/>
				))}
		</div>
	);
};

export default Orders;
