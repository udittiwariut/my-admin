"use client";
import React, { useState } from "react";
import classStringToArray from "./../../../utlis/functions/class";
import styles from "./Input.module.scss";
import { v4 as uuidv4 } from "uuid";

interface props {
	className?: string;
	type?: string;
	placeHolder: string;
	val: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	className = undefined,
	type = "text",
	placeHolder,
	val,
	handleChange,
}: props) => {
	return (
		<input
			type={type}
			placeholder={placeHolder}
			onChange={handleChange}
			value={val}
			className={`${styles.base} ${classStringToArray(className, styles)}`}
		></input>
	);
};

export default Input;
