"use client";
import React, { MouseEvent, useRef, useEffect } from "react";
import { useState } from "react";
import Button from "../../atom/button/Button";
import style from "./DropDown.module.scss";
import useOutSideToClose from "@/app/utlis/hooks/useOutSideToClose";

interface props {
	children: React.ReactNode;
	optionArray: React.ReactNode[];
	dropDownMenuItemStyle: string | undefined;
	onOptClick: (e: any) => any;
}

const DropDown = ({
	children,
	optionArray,
	dropDownMenuItemStyle = undefined,
	onOptClick = () => {},
}: props) => {
	const [active, setActive] = useState(false);

	const menuRef = useRef(null);
	const buttonRef = useRef(null);

	useOutSideToClose(menuRef, setActive);

	return (
		<div ref={menuRef} className={style.base}>
			<Button
				classNames={`${style.buttonStyleBase}`}
				onClick={() => setActive(!active)}
			>
				{children}
			</Button>
			<div
				className={style.dropDownMenu}
				style={{ maxHeight: active ? "20rem" : 0 }}
			>
				{optionArray.map((ele) => (
					<div onClick={onOptClick} className={dropDownMenuItemStyle}>
						{ele}
					</div>
				))}
			</div>
		</div>
	);
};

export default DropDown;
