"use client";
import React, { useEffect, useState } from "react";
import style from "./orders.module.scss";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../globalRedux/store";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import { setSelectedOrder } from "../globalRedux/orders/order.slice";
import { log } from "console";

let timeOut: string | number | NodeJS.Timeout | undefined;

let delay = 300;

const Orders = () => {
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
		<div className={style.base} id="orderMain">
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
