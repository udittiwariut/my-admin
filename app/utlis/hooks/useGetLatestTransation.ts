import { useState, useEffect } from "react";

import ORDER from "./../../../data/Orders.json";

function selectRandomMethod() {
	let max = 2;
	const min = 0;
	const methodArray = ["Cash on Delivery", "Online Payment", "EMI"];
	const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
	const status = ["Approved", "Pending"];
	max = 1;
	const randomStatus = Math.floor(Math.random() * (max - min + 1) + min);
	return {
		method: methodArray[randomNum],
		status: status[randomStatus],
	};
}

const useGetLatestTransaction = () => {
	const shortedOrderArray = ORDER.orders.sort(
		(a, b) => new Date(a.order_date) - new Date(b.order_date)
	);

	console.log(shortedOrderArray);
};

export default useGetLatestTransaction;
