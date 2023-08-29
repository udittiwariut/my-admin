export interface ORDER {
	order_id: string;
	customer_name: string;
	customer_email: string;
	order_date: string;
	order_total: number;
	order_items: ORDER_ITEM[];
}

export interface ORDER_ITEM {
	product_id: number;
	product_name: string;
	quantity: number;
	unit_price: number;
	subtotal: number;
}
