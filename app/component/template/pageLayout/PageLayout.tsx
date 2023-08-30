import React from "react";
import style from "./PageLayout.module.scss";
import Providers from "@/app/globalRedux/provider";
import SideBar from "../side-bar/SideBar";
import VerticalDivider from "../../atom/verticalDivider/VerticalDivider";
import NavBar from "../nav-bar/NavBar";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import NotificationBar from "../notificationBar/NotificationBar";
import Preloader from "@/app/globalRedux/Preloader";
import getGlobalData from "@/app/utlis/hooks/getGlobalData";
import AdminProfile from "../adminProfile/AdminProfile";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
	const orders = await getGlobalData();
	return (
		<>
			<Preloader order={orders} />
			<Providers>
				<div className={style.app}>
					<div className={style.body}>
						<div className={style.layout_left}>
							<SideBar />
							<VerticalDivider className={style.vertical_divider} />
						</div>
						<div className={style.layout_right}>
							<NavBar />
							<HorizontalDivider className={style.horizontal_divider} />
							<div className={style.children}>{children}</div>
						</div>
					</div>
					<NotificationBar />
					<AdminProfile />
				</div>
			</Providers>
		</>
	);
};

export default PageLayout;
