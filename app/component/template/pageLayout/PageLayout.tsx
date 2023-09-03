import React from "react";
import style from "./PageLayout.module.scss";
import Providers from "@/app/globalRedux/provider";
import SideBar from "../side-bar/SideBar";
import NavBar from "../nav-bar/NavBar";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import NotificationBar from "../notificationBar/NotificationBar";
import Preloader from "@/app/globalRedux/Preloader";
import getGlobalData from "@/app/utlis/hooks/getGlobalData";
import AdminProfile from "../adminProfile/AdminProfile";
import TitleLink from "../../molecule/title_link/TitleLink";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
	const orders = await getGlobalData();
	return (
		<>
			<Preloader order={orders} />
			<Providers>
				<div className={style.app}>
					<div className={style.body}>
						<TitleLink />
						<div>
							<NavBar />
						</div>

						<div>
							<SideBar />
						</div>
						<div className={style.children}>{children}</div>
					</div>
					<NotificationBar />
					<AdminProfile />
				</div>
			</Providers>
		</>
	);
};

export default PageLayout;
