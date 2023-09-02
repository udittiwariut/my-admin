import { RootState } from "@/app/globalRedux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import USER from "@/app/Types/User/User";
import { PRODUCT } from "@/app/Types/Product/Product";
import { ORDER } from "@/app/Types/Order/Order";
import { COMPLAINT } from "@/app/Types/Notification/Notification";

const delay = 500;
let timeOut: string | number | NodeJS.Timeout | undefined;

export interface RESULT {
	users: USER[] | [];
	product: PRODUCT[] | [];
	orders: ORDER[] | [];
	complaints: COMPLAINT[] | [];
}

const BreakError = {};

const filteredData = (
	data: USER[] | PRODUCT[] | ORDER[] | COMPLAINT[],
	search: string
) =>
	data.filter((ele) => {
		let match: any;
		try {
			Object.keys(ele).forEach((val) => {
				if (ele[val].toString().toLowerCase().includes(search.toLowerCase())) {
					match = ele;
					throw BreakError;
				}
			});
		} catch (error) {
			if (error !== BreakError) throw error;
		}
		return match;
	});

const useMatchSearchItem = (searchTerm: string) => {
	const users = useSelector((state: RootState) => state.user.user);
	const orders = useSelector((state: RootState) => state.orders.orders);
	const product = useSelector((state: RootState) => state.product.product);
	const complaints = useSelector(
		(state: RootState) => state.notification.notification
	);

	const [result, setResult] = useState<RESULT>({
		users: [],
		product: [],
		orders: [],
		complaints: [],
	});

	const debounce = () => {
		const filteredUser = filteredData(users, searchTerm);
		const filteredOrder = filteredData(orders, searchTerm);
		const filteredProduct = filteredData(product, searchTerm);
		const filteredComplaints = filteredData(complaints, searchTerm);

		setResult({
			users: filteredUser,
			orders: filteredOrder,
			product: filteredProduct,
			complaints: filteredComplaints,
		});
	};

	useEffect(() => {
		clearTimeout(timeOut);
		timeOut = setTimeout(() => {
			debounce();
		}, delay);
	}, [searchTerm]);

	return result;
};

export default useMatchSearchItem;
