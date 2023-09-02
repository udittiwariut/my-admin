import React from "react";
import DropDownItem from "../../atom/dropDownItem/DropDownItem";
import Title from "../../atom/title/Title";
import style from "./DropDrownModule.module.scss";
import { v4 as uuid } from "uuid";

const DropDownList = ({ array, onClick, title }) => {
	return (
		<div>
			<Title className={`title-5 fw-normal  ${style.title}`}>{title}</Title>
			{array.length &&
				array.map((item) => (
					<DropDownItem
						key={uuid()}
						item={item}
						onClick={(selectedItem) => onClick(selectedItem, title)}
					/>
				))}
		</div>
	);
};

export default DropDownList;
