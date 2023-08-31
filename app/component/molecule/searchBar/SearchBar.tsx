"use client";
import React, { Dispatch, useState, SetStateAction } from "react";
import Input from "../../atom/input/Input";
import Icon from "../../atom/icon/Icon";
import styles from "./SearchBar.module.scss";
import useMatchSearchItem from "@/app/utlis/hooks/useMatchSearchItem";
interface props {
	// onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	// isFocus: boolean;
	// setIsFocus: Dispatch<SetStateAction<boolean>>;
	// value: string;
}
const SearchBar = ({ className = undefined }: props) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	useMatchSearchItem(searchTerm);

	return (
		<div className={`${styles.base} ${className} `}>
			<Input
				placeHolder="Search..."
				className="p-2 border-0 shadow-none flex-grow-1"
				val={searchTerm}
				handleChange={handleOnChange}
			/>
			<button className={`btn ${styles.icon_btn}`} type="button">
				<Icon
					IconName="SEARCH"
					onClick={() => {}}
					width="1.4rem"
					height="1.4rem"
				/>
			</button>
		</div>
	);
};

export default SearchBar;
