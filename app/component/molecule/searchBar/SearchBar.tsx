"use client";
import React, { useState } from "react";
import Input from "../../atom/input/Input";
import Icon from "../../atom/icon/Icon";
import styles from "./SearchBar.module.scss";

interface props {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}
const SearchBar = ({ onChange, className = undefined }: props) => {
	const [isFocus, setIsFocus] = useState(false);

	console.log(className);

	return (
		<div
			className={`${styles.base} ${className} ${isFocus ? styles.focus : ""}`}
		>
			<Input
				placeHolder="Search..."
				className="p-2 border-0 shadow-none flex-grow-1"
				onChange={onChange}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
			/>
			<button className={`btn ${styles.icon_btn}`} type="button">
				<Icon
					IconName="SEARCH"
					onClick={() => console.log("clicked")}
					width="1.4rem"
					height="1.4rem"
				/>
			</button>
		</div>
	);
};

export default SearchBar;
