"use client";
import React, { useRef } from "react";
import store from "./store";
import { setOrders } from "./orders/order.slice";
import { ORDER } from "./../Types/Order/Order";

interface props {
	order: ORDER[];
}

const Preloader = ({ order }: props) => {
	const loaded = useRef(false);
	if (!loaded.current) {
		store.dispatch(setOrders(order));
		loaded.current = true;
	}

	return null;
};

export default Preloader;
