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
	ActivatingComponent: any;
	activeDropDown: boolean;
	setActiveDropDown: Dispatch<SetStateAction<boolean>>;
	children: React.ReactNode[];
}

const dropDownStyleActive = {
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
	ActivatingComponent,
	activeDropDown,
	setActiveDropDown,
}: props) => {
	const menuRef = useRef(null);
	const buttonRef = useRef(null);

	useOutSideToClose(menuRef, setActiveDropDown);

	return (
		<div ref={menuRef} className={style.base}>
			<ActivatingComponent key={uuidv4()} />
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
