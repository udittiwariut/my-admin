"use client";
import React, { useRef } from "react";
import store from "./store";
import { setOrders } from "./orders/order.slice";
import { setUser } from "./user/user.slice";
import { ORDER } from "./../Types/Order/Order";
import USER from "../Types/User/User";
import { PRODUCT } from "../Types/Product/Product";
import { setProduct } from "./product/product.slice";

interface props {
	order: ORDER[];
	users: USER[];
	products: PRODUCT[];
}

const Preloader = ({ order, users, products }: props) => {
	const loaded = useRef(false);
	if (!loaded.current) {
		store.dispatch(setOrders(order));
		store.dispatch(setUser(users));
		store.dispatch(setProduct(products));
		loaded.current = true;
	}

	return null;
};

export default Preloader;
