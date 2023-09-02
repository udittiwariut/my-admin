"use client";
import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import ROUTES, { Route } from "./Routes";
import Title from "../../atom/title/Title";
import Icon from "../../atom/icon/Icon";
import Link from "../../atom/link/Link";
import { usePathname } from "next/navigation";
import IconText from "../../molecule/iconText/IconText";
import { useDispatch, useSelector } from "react-redux";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import { setIsAdminModalOpen } from "@/app/globalRedux/admin/admin.slice";
import { ACTION } from "./Routes";
import { RootState } from "@/app/globalRedux/store";
import { setNotificationBtnRef } from "@/app/globalRedux/notification/notification.slice";

const helperFn = (routesArray: Route[]) => {
	const dispatch = useDispatch();

	const isNotificationBarOpen = useSelector(
		(state: RootState) => state.notification.isNotificationOpen
	);
	const isAdminModalOpen = useSelector(
		(state: RootState) => state.Admin.isAdminModalOpen
	);

	const [tootleSubRoutes, setToggleSUbRoutes] = useState({
		boolean: false,
		index: null as any,
	});

	const handleClick = (route: Route) => {
		if (route.action === undefined) return;
		if (route.action === ACTION.NOTIFICATION) {
			dispatch(setIsNotificationOpen(!isNotificationBarOpen));
		}
		if (route.action === ACTION.PROFILE)
			dispatch(setIsAdminModalOpen(!isAdminModalOpen));
	};

	const current_url = usePathname();

	return routesArray.map((routes, i) => {
		return (
			<>
				<div
					id={
						routes.action === ACTION.NOTIFICATION
							? "notificationBtn"
							: undefined
					}
				>
					<Link href={routes.link || current_url}>
						<div
							className={`${styles.sideBar_link_box} ${
								routes.subRoutes
									? "d-flex justify-content-between align-items-center"
									: null
							}`}
							onClick={() => {
								setToggleSUbRoutes({
									boolean: !tootleSubRoutes.boolean,
									index: i,
								});
								handleClick(routes);
							}}
						>
							<IconText
								iconName={routes.iconName}
								className={styles.sideBar_link}
							>
								{routes.text}
							</IconText>
							{routes.subRoutes ? (
								<div>
									<Icon
										IconName={
											tootleSubRoutes.boolean && tootleSubRoutes.index === i
												? "UP_ARROW"
												: "DOWN_ARROW"
										}
										height="1rem"
										width="1rem"
									/>
								</div>
							) : null}
						</div>
					</Link>
					{routes.subRoutes ? (
						<div
							className={`${styles.subRoutes} ${
								tootleSubRoutes.boolean && tootleSubRoutes.index === i
									? styles.subRoutesHeight
									: null
							}`}
						>
							{helperFn(routes.subRoutes)}
						</div>
					) : null}
				</div>
			</>
		);
	});
};

const SideBar = () => {
	return (
		<div className={styles.base}>
			<div>{helperFn(ROUTES)}</div>
			<div>
				<div className={`${styles.sideBar_link_box}`}>
					<a className={styles.logout} href="/api/auth/logout">
						<IconText iconName="LOGOUT" className={styles.sideBar_link}>
							Logout
						</IconText>
					</a>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
