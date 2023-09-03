import React, { useMemo } from "react";
import style from "./DropDownItem.module.scss";
import capitalizeFirst from "@/app/utlis/functions/capatalizeFirst";
import USER from "@/app/Types/User/User";
import Title from "../title/Title";
import { RootState } from "@/app/globalRedux/store";
import classHelperFn from "@/app/utlis/functions/themeClass";
import { useSelector } from "react-redux";

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
				<div className={style.gridItem}>
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
