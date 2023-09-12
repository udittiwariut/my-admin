import React from "react";
import DropDownItem from "../../atom/dropDownItem/DropDownItem";
import Title from "../../atom/title/Title";
import style from "./DropDrownModule.module.scss";
import { v4 as uuid } from "uuid";
import classHelperFn from "@/app/utlis/functions/themeClass";
import { useSelector } from "react-redux";
import { RootState } from "@/app/globalRedux/store";

const DropDownList = ({ array, onClick, title }: any) => {
	const theme = useSelector((state: RootState) => state.theme.theme);

	return (
		<div className={classHelperFn(style.base, theme, style)}>
			<Title className={`title-5 fw-normal  ${style.title}`}>{title}</Title>
			{array.length &&
				array.map((item: any) => (
					<DropDownItem
						key={uuid()}
						item={item}
						onClick={(selectedItem: any) => onClick(selectedItem, title)}
					/>
				))}
		</div>
	);
};

export default DropDownList;
