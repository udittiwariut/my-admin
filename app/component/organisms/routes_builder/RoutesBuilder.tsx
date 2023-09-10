import { setIsAdminModalOpen } from "@/app/globalRedux/admin/admin.slice";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import { RootState } from "@/app/globalRedux/store";
import { themes } from "@/app/utlis/functions/themeClass";
import { breakPoint } from "@/app/utlis/hooks/useGetClientWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../atom/icon/Icon";
import IconText from "../../molecule/iconText/IconText";
import styles from "./RoutesBuilder.module.scss";
import { ACTION, Route } from "../../template/side-bar/Routes";

interface props {
	routesArray: Route[];
}

const RouterBuilder = ({ routesArray }: props) => {
	const dispatch = useDispatch();

	const theme = useSelector((state: RootState) => state.theme.theme);

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
								iconFill={theme === themes.Dark ? "#aeadad" : "black"}
								iconName={routes.iconName}
								className={styles.sideBar_link}
							>
								{routes.text}
							</IconText>
							{routes.subRoutes ? (
								<div>
									<Icon
										fill={theme === themes.Dark ? "#aeadad" : "black"}
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
							{<RouterBuilder routesArray={routes.subRoutes} />}
						</div>
					) : null}
				</div>
			</>
		);
	});
};

export default RouterBuilder;
