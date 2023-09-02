"use client";
import React, {
	MouseEvent,
	useRef,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react";
import { v4 as uuidv4 } from "uuid";

import style from "./DropDown.module.scss";
import useOutSideToClose from "@/app/utlis/hooks/useOutSideToClose";

interface props {
	activeDropDown: boolean;
	setActiveDropDown: Dispatch<SetStateAction<boolean>>;
	children: React.ReactNode[];
	secondaryRef: HTMLElement | null;
}

const dropDownStyleActive = {
	overflowY: "scroll",
	maxHeight: "20rem",
	borderRight: "1px solid #aeadad",
	borderBottom: "1px solid #aeadad",
	borderLeft: "1px solid #aeadad",
};
const dropDownStyleUnActive = {
	maxHeight: 0,
};

const DropDown = ({
	children,
	activeDropDown,
	setActiveDropDown,
	secondaryRef = null,
}: props) => {
	const menuRef = useRef(null);
	const buttonRef = useRef(null);

	useOutSideToClose(menuRef, setActiveDropDown, secondaryRef);

	return (
		<div ref={menuRef} className={style.base}>
			<div
				className={style.dropDownMenu}
				style={activeDropDown ? dropDownStyleActive : dropDownStyleUnActive}
			>
				{children}
			</div>
		</div>
	);
};

export default DropDown;
