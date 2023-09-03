"use client";
import React, { useRef, Dispatch, SetStateAction } from "react";
import style from "./DropDown.module.scss";
import useOutSideToClose from "@/app/utlis/hooks/useOutSideToClose";
import classHelperFn from "@/app/utlis/functions/themeClass";
import { RootState } from "@/app/globalRedux/store";
import { useSelector } from "react-redux";

interface props {
	activeDropDown: boolean;
	setActiveDropDown: Dispatch<SetStateAction<boolean>>;
	children: React.ReactNode[];
	secondaryRef: HTMLElement | null;
}

const DropDown = ({
	children,
	activeDropDown,
	setActiveDropDown,
	secondaryRef = null,
}: props) => {
	const menuRef = useRef(null);
	const buttonRef = useRef(null);

	const theme = useSelector((state: RootState) => state.theme.theme);

	useOutSideToClose(menuRef, setActiveDropDown, secondaryRef);

	return (
		<div ref={menuRef} className={classHelperFn(style.base, theme, style)}>
			<div
				className={`${style.dropDownMenu} ${
					style[
						activeDropDown ? "dropDownStyleActive" : "dropDownStyleUnActive"
					]
				}`}
			>
				{children}
			</div>
		</div>
	);
};

export default DropDown;
