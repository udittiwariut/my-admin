import React from "react";
import Avatar from "@/app/component/molecule/avatar/Avatar";
import { PRODUCT } from "@/app/Types/Product/Product";
import Title from "@/app/component/atom/title/Title";
import useGetProductOrderHistory from "@/app/utlis/hooks/useGetProductOrderHistory";
import Table from "../../table/Table";
import globalModalStyle from "./../Modal.module.scss";
import capitalizeFirst from "@/app/utlis/functions/capatalizeFirst";
import { v4 as uuid } from "uuid";

interface props {
	product: PRODUCT | null;
}

const ProductModal = ({ product }: props) => {
	const fieldNotToInclude = ["img"];

	const title = Object.keys(product!).filter((ele) => {
		if (!fieldNotToInclude.includes(ele)) {
			return ele;
		}
	});

	const [orderDetail] = useGetProductOrderHistory(product?.product_id!);

	return (
		<div className={globalModalStyle.modal_base}>
			<div className={globalModalStyle.modal_body}>
				<div className={globalModalStyle.modal_avatar}>
					<Avatar link={product?.img!}></Avatar>
				</div>
				<div className={globalModalStyle.modal_details}>
					{title.map((detail) => (
						<div className={globalModalStyle.modal_gridItem} key={uuid()}>
							<strong>{capitalizeFirst(detail)}</strong>: {"  "}{" "}
							{product![detail as keyof typeof product]}
						</div>
					))}
				</div>
			</div>
			<div className={globalModalStyle.modal_orderHistory}>
				<Title className="title-2 text-secondary fw-bold pb-2 pt-3">
					Order History :-
				</Title>
			</div>
			<div className={globalModalStyle.modal_orderDetail}>
				{orderDetail?.length && <Table tableContent={orderDetail} />}
			</div>
		</div>
	);
};

export default ProductModal;
