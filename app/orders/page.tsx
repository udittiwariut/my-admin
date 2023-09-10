"use client";
import React, { useEffect, useMemo, useState } from "react";
import style from "./orders.module.scss";
import OrderCard from "../component/organisms/order_card/OrderCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../globalRedux/store";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";
import { setSelectedOrder } from "../globalRedux/orders/order.slice";
import classHelperFn from "../utlis/functions/themeClass";
import useGetClientWidth, {
	breakPoint,
} from "../utlis/hooks/useGetClientWidth";

let timeOut: string | number | NodeJS.Timeout | undefined;
let timeOut2: string | number | NodeJS.Timeout | undefined;

let delay = 300;

const Orders = () => {
	const orderMain = document.getElementById("children");
	const dispatch = useDispatch();

	const theme = useSelector((state: RootState) => state.theme.theme);

	const [showDetail, setShowDetail] = useState<null | number>(null);
	const orders = useSelector((state: RootState) => state.orders.orders);
	const selectedOrder = useSelector(
		(state: RootState) => state.orders.selectedOrder
	);
	const [{ oddList, evenList }, setOrderList] = useState({
		oddList: [],
		evenList: [],
	});

	const clientWidth = useGetClientWidth(timeOut2);

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
			{clientWidth > breakPoint.xm ? (
				<>
					<div className={style.odd}>
						{orders.map((order, i) => {
							if ((i + 1) % 2 !== 0)
								return (
									<OrderCard
										key={order.order_id}
										order={order}
										setShowDetail={setShowDetail}
										showDetail={showDetail}
										index={i}
										clientWidth={clientWidth}
									/>
								);
						})}
					</div>
					<div className={style.odd}>
						{orders.map((order, i) => {
							if ((i + 1) % 2 === 0)
								return (
									<OrderCard
										key={order.order_id}
										order={order}
										setShowDetail={setShowDetail}
										showDetail={showDetail}
										index={i}
										clientWidth={clientWidth}
									/>
								);
						})}
					</div>
				</>
			) : (
				<div className={style.normal}>
					{orders.map((order, i) => {
						return (
							<OrderCard
								key={order.order_id}
								order={order}
								setShowDetail={setShowDetail}
								showDetail={showDetail}
								index={i}
								clientWidth={clientWidth}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Orders;
