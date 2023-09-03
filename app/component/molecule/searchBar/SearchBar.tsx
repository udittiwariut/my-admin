"use client";
import React, { Dispatch, useState, SetStateAction, useEffect } from "react";
import Input from "../../atom/input/Input";
import Icon from "../../atom/icon/Icon";
import styles from "./SearchBar.module.scss";
import useMatchSearchItem from "@/app/utlis/hooks/useMatchSearchItem";
import classHelperFn from "@/app/utlis/functions/themeClass";
import { RootState } from "@/app/globalRedux/store";
import { useSelector } from "react-redux";
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
	const theme = useSelector((state: RootState) => state.theme.theme);

	return (
		<div
			className={` ${classHelperFn(styles.base, theme, styles)} ${className} `}
		>
			<Input
				placeHolder="Search..."
				className={`p-2 border-0 shadow-none flex-grow-1 ${classHelperFn(
					styles.base,
					theme,
					styles
				)}`}
				val={searchTerm}
				handleChange={handleOnChange}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
		</div>
	);
};

export default SearchBar;
