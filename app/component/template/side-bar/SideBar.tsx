"use client";

import React from "react";
import ROUTES from "./Routes";
import IconText from "../../molecule/iconText/IconText";
import { useSelector } from "react-redux";
import { RootState } from "@/app/globalRedux/store";
import classHelperFn, { themes } from "@/app/utlis/functions/themeClass";
import useGetClientWidth from "@/app/utlis/hooks/useGetClientWidth";
import RouteBuilder from "../../organisms/routes_builder/RoutesBuilder";
import styles from "./SideBar.module.scss";

function SideBar() {
	const theme = useSelector((state: RootState) => state.theme.theme);
	let timeout;

	const clientWidth = useGetClientWidth(timeout);
	return (
		<div className={classHelperFn(styles.base, theme, styles)}>
			<div>{<RouteBuilder routesArray={ROUTES} />}</div>
			<div>
				<div className={`${styles.sideBar_link_box}`}>
					<a className={styles.logout} href="/api/auth/logout">
						<IconText
							iconFill={theme === themes.Dark ? "#aeadad" : "black"}
							iconName="LOGOUT"
							className={styles.sideBar_link}
						>
							Logout
						</IconText>
					</a>
				</div>
			</div>
		</div>
	);
}
export default SideBar;
