import USER from "@/app/Types/User/User";
import { COLLECTION, getFireStoreData } from "../firebase/fireStore";
import { ORDER, ORDER_ITEM } from "@/app/Types/Order/Order";
import { PRODUCT } from "@/app/Types/Product/Product";

export const getGlobalData_Order = async () => {
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

export const getGlobalData_Users = async () => {
	const userArrayShorted: USER[] = [];
	const data: any = await getFireStoreData(COLLECTION.USER);

	data.forEach((user: USER) => {
		const obj = {
			user_id: user.user_id,
			username: user.username,
			email: user.email,
			first_name: user.first_name,
			last_name: user.last_name,
			address: user.address,
			city: user.city,
			country: user.country,
			zip_code: user.zip_code,
			img: user.img,
		};
		userArrayShorted.push(obj);
	});

	userArrayShorted.sort((a, b) => a.user_id - b.user_id);

	return userArrayShorted;
};

export const getGlobalData_Products = async () => {
	const productArray: PRODUCT[] = [];
	const product: any = await getFireStoreData(COLLECTION.PRODUCT);

	product.forEach((product: PRODUCT) => {
		const obj = {
			product_id: product.product_id,
			product_name: product.product_name,
			category: product.category,
			price_usd: product.price_usd,
			stock_quantity: product.stock_quantity,
			brand: product.brand,
			img:
				product.img ||
				"https://res.cloudinary.com/dmbtc9axm/image/upload/v1692442091/pexels-manav-sharma-3392232_hcrpez.jpg",
		};
		productArray.push(obj);
	});
	productArray.sort((a, b) => a.product_id - b.product_id);
	return productArray;
};
