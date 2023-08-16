"use client";
import React, { useState } from "react";
import style from "./orders.module.scss";
import Order from "./../../data/Orders.json";
import OrderCard from "./OrderCard";

const Orders = () => {
	const [showDetail, setShowDetail] = useState<null | number>(null);
	return (
		<div className={style.base}>
			{Order.orders.length &&
				Order.orders.map((order, i) => (
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
