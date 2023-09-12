import React, { useMemo } from "react";
import style from "./DropDownItem.module.scss";
import capitalizeFirst from "@/app/utlis/functions/capatalizeFirst";
import Title from "../title/Title";
import { v4 as uuid } from "uuid";

const propertyToShow = 3;

const DropDownItem = ({ item: itemProp, onClick }) => {
	const firstFour = useMemo(() => {
		const firstFour: any = [];
		Object.keys(itemProp).forEach((val, i) => {
			if (i <= 3) firstFour.push({ key: val, val: itemProp[val] });
		});
		return firstFour;
	}, []);

	return (
		<div className={style.base} onClick={() => onClick(itemProp)}>
			{firstFour.map((ele) => (
				<div className={style.gridItem} key={uuid()}>
					<Title
						className={`title-5 text-secondary fw-normal text-nowrap text-truncate ${style.text}`}
					>
						{capitalizeFirst(ele.key)}: {ele.val}
					</Title>
				</div>
			))}
		</div>
	);
};

export default DropDownItem;
