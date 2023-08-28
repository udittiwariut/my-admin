import { useState, useEffect } from "react";
import ORDER from "./../../../data/Orders.json";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/globalRedux/store";

interface ORDER_DETAIL {
	orderId: string;
	customerName: string;
	customerEmail: string;
	date: string;
	method: string;
}

function selectRandomMethod() {
	const max = 2;
	const min = 0;
	const methodArray = ["Cash on Delivery", "Online Payment", "EMI"];
	const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
	return methodArray[randomNum];
}

const useGetProductOrderHistory = (productId: number) => {
	const [orderDetail, setOrderDetail] = useState<ORDER_DETAIL[] | undefined>();
	const orders = useSelector((state: RootState) => state.orders.orders);

	useEffect(() => {
		const objArray: ORDER_DETAIL[] = [];
		orders.map((ele) => {
			ele.order_items.map((orderItem) => {
				if (orderItem.product_id === productId) {
					const obj = {
						orderId: ele.order_id,
						customerName: ele.customer_name,
						customerEmail: ele.customer_email,
						date: ele.order_date,
						method: selectRandomMethod(),
					};
					objArray.push(obj);
				}
			});
		});
		setOrderDetail(objArray);
	}, [productId]);

	return [orderDetail];
};

export default useGetProductOrderHistory;
