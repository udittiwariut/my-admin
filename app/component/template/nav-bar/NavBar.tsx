"use client";
import React, { useState } from "react";
import Icon from "../../atom/icon/Icon";
import Title from "../../atom/title/Title";
import SearchBar from "../../molecule/searchBar/SearchBar";
import NavIcon from "../../organisms/nav_icon/NavIcon";

import styles from "./Navbar.module.scss";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import VerticalDivider from "../../atom/verticalDivider/VerticalDivider";

const NavBar = () => {
	return (
		<nav className={`p-2 pb-0.5 ${styles.base}`}>
			<div className={`${styles.nav_searchBar}`}>
				<SearchBar
					className="ml-2"
					onChange={(e) => console.log(e.target.value)}
				/>
			</div>
			<div className={`${styles.nav_icon}`}>
				<NavIcon>
					<Icon IconName="MOON" width="1.5rem" height="100%" fill={"#aeadad"} />
					<Icon IconName="BELL" width="1.5rem" height="100&" fill={"#aeadad"} />
					<Icon IconName="USER" width="1.5rem" height="100%" fill={"#aeadad"} />
					<Icon
						IconName="SETTING"
						width="1.5rem"
						height="100%"
						fill={"#aeadad"}
					/>
				</NavIcon>
			</div>
		</nav>
	);
};

export default NavBar;
