import React from "react";
import style from "./ModalHead.module.scss";
import Title from "../../atom/title/Title";
import Icon from "../../atom/icon/Icon";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import Button from "../../atom/button/Button";

const ModalHead = () => {
	const clickHandler = () => {};

	return (
		<div className={style.base}>
			<div className={style.header}>
				<Title className="title-2 text-secondary fw-bold pb-2 pt-1">
					User details
				</Title>
				<Button onClick={clickHandler}>
					<Icon
						className={style.icon}
						IconName="CLOSE"
						height="2rem"
						width="2rem"
					/>
				</Button>
			</div>
			<HorizontalDivider />
			<div className={style.body}></div>
		</div>
	);
};

export default ModalHead;
