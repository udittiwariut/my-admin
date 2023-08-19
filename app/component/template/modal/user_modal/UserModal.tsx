import React, { useState, useMemo } from "react";
import style from "./UserModal.module.scss";
import Avatar from "./../../../molecule/avatar/Avatar";
import Title from "@/app/component/atom/title/Title";
import Order from "./../../../../../data/Orders.json";
import CustomOrderHistoryTable from "../../table/custom_table/CustomOrderHistoryTable";
import USER from "@/app/Types/User/User";

interface props {
	user: USER | null;
}
const UserModal = ({ user }: props) => {
	const [isDetailOpen, setIsDetailOpen] = useState<null | number>(null);
	const fieldNotToInclude = ["img"];

	const userOrder = useMemo(
		() => Order.orders.filter((order) => order.customer_email === user!.email),
		[]
	);

	const title = Object.keys(user!).filter((ele) => {
		if (!fieldNotToInclude.includes(ele)) {
			return ele;
		}
	});

	return (
		<div className={style.base}>
			<div className={style.body}>
				<div className={style.avatar}>
					<Avatar link={user?.img!}></Avatar>
				</div>
				<div className={style.details}>
					{title.map((detail) => (
						<div className={style.gridItem}>
							<strong>
								{detail.charAt(0).toUpperCase() +
									detail.slice(1).replace("_", " ")}
							</strong>
							: {"  "} {user![detail as keyof typeof user]}
						</div>
					))}
				</div>
			</div>
			<div className={style.orderHistory}>
				<Title className="title-2 text-secondary fw-bold pb-2 pt-1">
					Order History :-
				</Title>
				<CustomOrderHistoryTable
					tableContent={userOrder}
					setIsDetailOpen={setIsDetailOpen}
					isDetailOpen={isDetailOpen}
					fieldNotToInclude={["order_items", "customer_name", "customer_email"]}
				/>
			</div>
		</div>
	);
};

export default UserModal;
