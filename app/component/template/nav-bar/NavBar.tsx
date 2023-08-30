"use client";
import React, { useState } from "react";
import Icon from "../../atom/icon/Icon";
import SearchBar from "../../molecule/searchBar/SearchBar";
import NavIcon from "../../organisms/nav_icon/NavIcon";
import { useDispatch, useSelector } from "react-redux";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import { setIsAdminModalOpen } from "@/app/globalRedux/admin/admin.slice";
import styles from "./Navbar.module.scss";
import { ACTION } from "./../side-bar/Routes";
import { RootState } from "@/app/globalRedux/store";

const NavBar = () => {
	const dispatch = useDispatch();
	const isNotificationBarOpen = useSelector(
		(state: RootState) => state.notification.isNotificationOpen
	);
	const isAdminModalOpen = useSelector(
		(state: RootState) => state.Admin.isAdminModalOpen
	);

	const clickHandler = (action: string) => {
		if (action === ACTION.NOTIFICATION)
			dispatch(setIsNotificationOpen(!isNotificationBarOpen));
		if (action === ACTION.PROFILE)
			dispatch(setIsAdminModalOpen(!isAdminModalOpen));
	};
	return (
		<nav className={`p-2 pb-0.5 ${styles.base}`}>
			<div className={`${styles.nav_searchBar}`}>
				<SearchBar
					className="ml-2"
					onChange={(e) => console.log(e.target.value)}
				/>
			</div>
			<div className={`${styles.nav_iconContainer}`}>
				<NavIcon>
					<Icon
						className={styles.nav_icon}
						IconName="MOON"
						width="1.5rem"
						height="100%"
						fill={"#aeadad"}
					/>
					<Icon
						IconName="BELL"
						width="1.5rem"
						height="100&"
						fill={"#aeadad"}
						onClick={() => clickHandler(ACTION.NOTIFICATION)}
						className={styles.nav_icon}
					/>
					<Icon
						IconName="USER"
						width="1.5rem"
						height="100%"
						fill={"#aeadad"}
						className={styles.nav_icon}
						onClick={() => clickHandler(ACTION.PROFILE)}
					/>
					<Icon
						IconName="SETTING"
						width="1.5rem"
						height="100%"
						fill={"#aeadad"}
						className={styles.nav_icon}
					/>
				</NavIcon>
			</div>
		</nav>
	);
};

export default NavBar;
