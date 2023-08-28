"use client";
import React, { useState } from "react";
import style from "./orders.module.scss";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import type { RootState } from "../globalRedux/store";

const Orders = () => {
	const [showDetail, setShowDetail] = useState<null | number>(null);
	const orders = useSelector((state: RootState) => state.orders.orders);

	return (
		<div className={style.base}>
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
