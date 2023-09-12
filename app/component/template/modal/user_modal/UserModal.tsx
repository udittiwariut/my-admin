import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Avatar from "./../../../molecule/avatar/Avatar";
import Title from "@/app/component/atom/title/Title";
import CustomOrderHistoryTable from "../../table/custom_table/CustomOrderHistoryTable";
import USER from "@/app/Types/User/User";
import type { RootState } from "@/app/globalRedux/store";
import style from "./UserModal.module.scss";
import globalModalStyle from "./../Modal.module.scss";
import { v4 as uuid } from "uuid";
import capitalizeFirst from "@/app/utlis/functions/capatalizeFirst";

interface props {
	user: USER | null | undefined;
}
const UserModal = ({ user }: props) => {
	const [isDetailOpen, setIsDetailOpen] = useState<null | number>(null);
	const fieldNotToInclude = ["img"];
	const orders = useSelector((state: RootState) => state.orders.orders);

	const userOrder = useMemo(
		() => orders.filter((order) => order.customer_email === user!.email),
		[]
	);

	const title = Object.keys(user!).filter((ele) => {
		if (!fieldNotToInclude.includes(ele)) {
			return ele;
		}
	});

	return (
		<div className={globalModalStyle.modal_base}>
			<div className={globalModalStyle.modal_body}>
				<div className={globalModalStyle.modal_avatar}>
					<Avatar link={user?.img!}></Avatar>
				</div>
				<div className={globalModalStyle.modal_details}>
					{title.map((detail) => (
						<div className={style.gridItem} key={uuid()}>
							<strong>{capitalizeFirst(detail)}</strong>: {"  "}{" "}
							{user![detail as keyof typeof user]}
						</div>
					))}
				</div>
			</div>
			<div className={globalModalStyle.modal_orderHistory}>
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
