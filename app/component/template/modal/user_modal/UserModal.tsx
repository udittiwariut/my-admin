import React from "react";
import style from "./UserModal.module.scss";
import ModalHead from "@/app/component/organisms/modal_head/ModalHead";
const UserModal = () => {
	return (
		<div className={style.base}>
			<ModalHead />
			<div className={style.OrderContainer}></div>
		</div>
	);
};

export default UserModal;
