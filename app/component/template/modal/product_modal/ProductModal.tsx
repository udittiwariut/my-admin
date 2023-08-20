import React from "react";
import style from "./ProductModal.module.scss";
import Avatar from "@/app/component/molecule/avatar/Avatar";
import { PRODUCT } from "@/app/Types/Product/Product";
import Title from "@/app/component/atom/title/Title";
import useGetProductOrderHistory from "@/app/utlis/hooks/useGetProductOrderHistory";
import Table from "../../table/Table";

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
		<div className={style.base}>
			<div className={style.body}>
				<div className={style.avatar}>
					<Avatar link="https://res.cloudinary.com/dmbtc9axm/image/upload/v1692442091/pexels-manav-sharma-3392232_hcrpez.jpg"></Avatar>
				</div>
				<div className={style.details}>
					{title.map((detail) => (
						<div className={style.gridItem}>
							<strong>
								{detail.charAt(0).toUpperCase() +
									detail.slice(1).replace("_", " ")}
							</strong>
							: {"  "} {product![detail as keyof typeof product]}
						</div>
					))}
				</div>
			</div>
			<Title className="title-2 text-secondary fw-bold pb-2 pt-1">
				Order History :-
			</Title>
			<div className={style.orderDetail}>
				{orderDetail?.length && <Table tableContent={orderDetail} />}
			</div>
		</div>
	);
};

export default ProductModal;
