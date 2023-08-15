import React from "react";
import style from "./UserModal.module.scss";
import Icon from "./../../../atom/icon/Icon";
const UserModal = () => {
	return (
		<div>
			<div className={style.detailContainer}>
				<div className={style.userImg}>
					<Icon IconName="USER"></Icon>
				</div>
				<div className={style.detail}></div>
			</div>
			<div className={style.OrderContainer}></div>
		</div>
	);
};

export default UserModal;
