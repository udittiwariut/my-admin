import React from "react";
import style from "./PageLayout.module.scss";
import Providers from "@/app/globalRedux/provider";
import SideBar from "../side-bar/SideBar";
import NavBar from "../nav-bar/NavBar";
import NotificationBar from "../notificationBar/NotificationBar";

import AdminProfile from "../adminProfile/AdminProfile";
import TitleLink from "../../molecule/title_link/TitleLink";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className={style.app}>
				<div className={style.body}>
					<div id="SideBar" className={style.sideBar}>
						<TitleLink />
						<SideBar />
					</div>
					<div className={style.navBar}>
						<NavBar />
						{children}
					</div>
				</div>
				<NotificationBar />
				<AdminProfile />
			</div>
		</>
	);
};

export default PageLayout;
