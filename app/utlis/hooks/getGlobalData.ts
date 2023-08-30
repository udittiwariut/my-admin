import { COLLECTION, getFireStoreData } from "../firebase/fireStore";
import { ORDER, ORDER_ITEM } from "@/app/Types/Order/Order";

const getGlobalData = async () => {
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
	return shortedOrder;
};

export default getGlobalData;
