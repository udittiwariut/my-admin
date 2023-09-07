import React from "react";
import style from "./PageLayout.module.scss";
import Providers from "@/app/globalRedux/provider";
import SideBar from "../side-bar/SideBar";
import NavBar from "../nav-bar/NavBar";
import NotificationBar from "../notificationBar/NotificationBar";

import AdminProfile from "../adminProfile/AdminProfile";
import TitleLink from "../../molecule/title_link/TitleLink";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<div className={style.app}>
				<div className={style.body}>
					<div className={style.logoDiv}>
						<TitleLink />
					</div>
					<div className={style.navBar}>
						<NavBar />
					</div>
					<div>
						<SideBar />
					</div>

					{children}
				</div>
				<NotificationBar />
				<AdminProfile />
			</div>
		</>
	);
};

export default PageLayout;
