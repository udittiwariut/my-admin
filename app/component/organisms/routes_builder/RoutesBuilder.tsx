import { setIsAdminModalOpen } from "@/app/globalRedux/admin/admin.slice";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import { RootState } from "@/app/globalRedux/store";
import { themes } from "@/app/utlis/functions/themeClass";
import useGetClientWidth, {
	breakPoint,
} from "@/app/utlis/hooks/useGetClientWidth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../../atom/icon/Icon";
import IconText from "../../molecule/iconText/IconText";
import styles from "./RoutesBuilder.module.scss";
import { ACTION, Route } from "../../template/side-bar/Routes";
import { v4 as uuid } from "uuid";

const helperFn = (routesArray: Route[]) => {
	let obj: any = {};
	routesArray.forEach((route, i) => {
		if (route.subRoutes) {
			obj[i as keyof typeof obj] = [
				styles.subRoutesHeightOpen,
				styles.subRoutesHeightClose,
			];
		}
	});
	return obj;
};

interface props {
	routesArray: Route[];
}

let timeout: any;

const RouterBuilder = ({ routesArray }: props) => {
	const dispatch = useDispatch();
	const clientWidth = useGetClientWidth(timeout);

	const [toggleSubRoutes, setToggleSUbRoutes] = useState(helperFn(routesArray));

	const theme = useSelector((state: RootState) => state.theme.theme);

	const isNotificationBarOpen = useSelector(
		(state: RootState) => state.notification.isNotificationOpen
	);
	const isAdminModalOpen = useSelector(
		(state: RootState) => state.Admin.isAdminModalOpen
	);

	const handleClick = (route: Route) => {
		if (route.action === undefined) return;
		if (route.action === ACTION.NOTIFICATION) {
			dispatch(setIsNotificationOpen(!isNotificationBarOpen));
		}
		if (route.action === ACTION.PROFILE)
			dispatch(setIsAdminModalOpen(!isAdminModalOpen));
	};

	const handleSubRoutToggle = (index: number) => {
		if (Object.hasOwn(toggleSubRoutes, index)) {
			setToggleSUbRoutes({
				...toggleSubRoutes,
				index: toggleSubRoutes[index].reverse(),
			});
		}
	};

	const current_url = usePathname();

	return routesArray.map((routes, i) => {
		return (
			<>
				<div
					key={uuid()}
					id={
						routes.action === ACTION.NOTIFICATION
							? "notificationBtn"
							: undefined
					}
				>
					<Link href={routes.link || current_url} className={styles.link}>
						<div
							className={`${styles.sideBar_link_box} ${
								routes.subRoutes && clientWidth > breakPoint.md
									? "d-flex justify-content-between align-items-center"
									: routes.subRoutes
									? "pb-2"
									: null
							}`}
							onClick={() => {
								handleSubRoutToggle(i);
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
											toggleSubRoutes[i][0] === styles.subRoutesHeightOpen
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
						<div className={toggleSubRoutes[i][0]}>
							{<RouterBuilder routesArray={routes.subRoutes} />}
						</div>
					) : null}
				</div>
			</>
		);
	});
};

export default RouterBuilder;
