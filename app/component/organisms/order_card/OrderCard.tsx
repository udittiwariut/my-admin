"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import Title from "../../atom/title/Title";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import moment from "moment";
import style from "./OrderCard.module.scss";
import Text from "../../atom/text/Text";
import Icon from "../../atom/icon/Icon";
import Table from "../../template/table/Table";
import { ORDER } from "./../../../Types/Order/Order";
import { useSelector } from "react-redux";
import { RootState } from "./../../../globalRedux/store";
import classHelperFn, { themes } from "@/app/utlis/functions/themeClass";
import { breakPoint } from "@/app/utlis/hooks/useGetClientWidth";

interface props {
	order: ORDER;
	showDetail: number | null;
	setShowDetail: Dispatch<SetStateAction<number | null>>;
	index: number;
}

const OrderCard = ({ order, setShowDetail, showDetail, index }: props) => {
	const theme = useSelector((state: RootState) => state.theme.theme);

	return (
		<div
			id={order.order_id}
			className={classHelperFn(style.flexItem, theme, style)}
		>
			<div className={`${style.cover}`}>
				<div
					className={style.expandIcon}
					onClick={() =>
						showDetail === index ? setShowDetail(null) : setShowDetail(index)
					}
				>
					<Icon
						fill={theme === themes.Dark ? "#5c5f66" : "black"}
						className={`d-flex justify-content-center align-items-center `}
						IconName={showDetail === index ? "UP_ARROW" : "DOWN_ARROW"}
					></Icon>
				</div>
				<div className={style.card}>
					<Title className={style.title}>Order Id: {order.order_id}</Title>
					<HorizontalDivider />
					<div className={style.body}>
						<div className={style.detailSection}>
							<Title className="title-5 text-secondary fw-normal text-nowrap text-truncate">
								Customer Name: {order.customer_name}
							</Title>
							<Title className="title-5 text-secondary fw-normal text-truncate">
								Customer Email: {order.customer_email}
							</Title>
							<Title className="title-5 text-secondary fw-normal text-truncate">
								Order Date: {moment(order.order_date).format("MMMM Do YYYY")}{" "}
							</Title>
							<Title className="title-5 text-secondary fw-normal text-truncate">
								Order vol: x{order.order_items.length}
							</Title>
						</div>

						<HorizontalDivider className={style.margin} />
						<Text className={`text-xl text-bold mb-1 mt-2 ${style.total}`}>
							Total: {order.order_total}
						</Text>
						<Text className={`text-sm text-center ${style.showDetail}`}>
							{showDetail === index ? "Show less" : "Show Detail"}
						</Text>
					</div>
					{showDetail === index && (
						<div
							className={style.orderDetail}
							style={{ height: "fit-content" }}
						>
							<Table
								tableContent={order.order_items}
								classNames={style.table}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
