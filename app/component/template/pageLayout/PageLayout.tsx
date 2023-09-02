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
import Link from "next/link";
import Title from "../../atom/title/Title";

const PageLayout = async ({ children }: { children: React.ReactNode }) => {
	const orders = await getGlobalData();
	return (
		<>
			<Preloader order={orders} />
			<Providers>
				<div className={style.app}>
					<div className={style.body}>
						<div className={` ${style.title}`}>
							<Link href="/" className={`pt-2 ${style.logo_link}`}>
								<Title
									className={`title-2 ${style.logo_container} text-center pb-2`}
								>
									Admin Plus
								</Title>
							</Link>
						</div>
						<div className={style.navBar}>
							<NavBar />
						</div>
						<div className={style.sideBar}>
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
