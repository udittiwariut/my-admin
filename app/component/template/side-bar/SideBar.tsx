"use client";
import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import IconLink from "./../../molecule/iconLink/IconLink";
import ROUTES, { Route } from "./Routes";
import Title from "../../atom/title/Title";
import Icon from "../../atom/icon/Icon";

const helperFn = (routesArray: Route[]) => {
	const [tootleSubRoutes, setToggleSUbRoutes] = useState({
		boolean: false,
		index: null as any,
	});
	return routesArray.map((routes, i) => {
		return (
			<>
				<div
					className={`${styles.sideBar_link_box} ${
						routes.subRoutes
							? "d-flex justify-content-between align-items-center"
							: null
					}`}
					onClick={() =>
						setToggleSUbRoutes({ boolean: !tootleSubRoutes.boolean, index: i })
					}
				>
					<IconLink
						iconName={routes.iconName}
						href={routes.link}
						text={routes.text}
						className={styles.sideBar_link}
					/>
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
			</>
		);
	});
};

const SideBar = () => {
	return (
		<div className={styles.base}>
			<Title className={`title-2 ${styles.logo_container} text-center pb-2`}>
				Admin Plus
			</Title>
			<div>{helperFn(ROUTES)}</div>
		</div>
	);
};
export default SideBar;
