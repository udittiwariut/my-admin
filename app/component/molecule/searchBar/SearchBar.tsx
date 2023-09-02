"use client";
import React, { Dispatch, useState, SetStateAction, useEffect } from "react";
import Input from "../../atom/input/Input";
import Icon from "../../atom/icon/Icon";
import styles from "./SearchBar.module.scss";
import useMatchSearchItem from "@/app/utlis/hooks/useMatchSearchItem";
interface props {
	className?: string;
	searchTerm: string;
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: () => void;
	onFocus?: () => void;
}

const SearchBar = ({
	className = undefined,
	searchTerm,
	handleOnChange,
	onBlur,
	onFocus,
}: props) => {
	return (
		<div className={`${styles.base} ${className} `}>
			<Input
				placeHolder="Search..."
				className="p-2 border-0 shadow-none flex-grow-1"
				val={searchTerm}
				handleChange={handleOnChange}
				onBlur={onBlur}
				onFocus={onFocus}
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
