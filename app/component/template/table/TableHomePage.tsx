import React from "react";
import style from "./Table.module.scss";
import Text from "../../atom/text/Text";

const rows = [
	{
		id: 1143155,
		product: "Acer Nitro 5",
		img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "John Smith",
		date: "1 March",
		amount: 785,
		method: "Cash on Delivery",
		status: "Approved",
	},
	{
		id: 2235235,
		product: "Playstation 5",
		img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
		customer: "Michael Doe",
		date: "1 March",
		amount: 900,
		method: "Online Payment",
		status: "Pending",
	},
	{
		id: 2342353,
		product: "Redragon S101",
		img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "John Smith",
		date: "1 March",
		amount: 35,
		method: "Cash on Delivery",
		status: "Pending",
	},
	{
		id: 2357741,
		product: "Razer Blade 15",
		img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "Jane Smith",
		date: "1 March",
		amount: 920,
		method: "Online",
		status: "Approved",
	},
	{
		id: 2342355,
		product: "ASUS ROG Strix",
		img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
		customer: "Harold Carol",
		date: "1 March",
		amount: 2000,
		method: "Online",
		status: "Pending",
	},
];

const status = {
	APPROVED: "Approved",
	PENDING: "Pending",
};
const Table = () => {
	return (
		<div className={style.base}>
			<Text className="text-secondary p-3">Latest Transaction</Text>
			<table className="table">
				<thead>
					<tr>
						{Object.keys(rows[0]).map((th) =>
							th != "img" ? <th className="p-3">{th.toUpperCase()}</th> : null
						)}
					</tr>
				</thead>
				<tbody>
					{rows.map((ele) => {
						return (
							<tr>
								{Object.keys(ele).map((key) =>
									key != "img" ? (
										key != "product" ? (
											<td
												className={`p-3 ${
													key === "status" && ele.status === status.APPROVED
														? "text-success"
														: null
												} ${
													key === "status" && ele.status === status.PENDING
														? "text-warning"
														: null
												}`}
											>
												{ele[key]}
											</td>
										) : (
											<td className="p-3">
												<img
													src={ele.img}
													alt="img"
													className={style.product_img}
												/>
												{ele[key]}
											</td>
										)
									) : null
								)}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
