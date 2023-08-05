"use client";
import React from "react";
import classStringToArray from "./../../../utlis/functions/class";
import styles from "./Input.module.scss";

interface props {
	className?: string;
	type?: string;
	placeHolder: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
	onFocus?: () => any;
	onBlur: () => any;
}

const Input = ({
	className = undefined,
	type = "text",
	placeHolder,
	onChange,
	onFocus = () => {},
	onBlur = () => {},
}: props) => {
	return (
		<input
			type={type}
			placeholder={placeHolder}
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			className={`${
				styles.base
			} form-control form-control-md ${classStringToArray(className, styles)}`}
		></input>
	);
};

export default Input;
