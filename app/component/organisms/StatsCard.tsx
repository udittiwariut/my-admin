import styles from "./statsCard.module.scss";
import Title from "./../atom/title/Title";
import Text from "./../atom/text/Text";
import Route from "./../atom/link/Link";
import Icon from "./../atom/icon/Icon";
import FlexBox from "./../molecule/flexBox/FlexBox";
import classHelperFn from "@/app/utlis/functions/themeClass";
import { useSelector } from "react-redux";
import { RootState } from "@/app/globalRedux/store";
import { ACTION } from "./../template/side-bar/Routes";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import { setIsAdminModalOpen } from "@/app/globalRedux/admin/admin.slice";
import { useDispatch } from "react-redux";
import Button from "../atom/button/Button";

interface props {
	className?: string;
	title: string;
	action: string | any;
	changes: String;
	iconName: string;
	iconFill: string;
	value: string;
}

const StatsCard = ({
	title,
	action,
	changes,
	iconName,
	iconFill,
	value,
}: props) => {
	const dispatch = useDispatch();
	const theme = useSelector((state: RootState) => state.theme.theme);

	const clickHandler = (actionType: string) => {
		if (action === ACTION.NOTIFICATION) dispatch(setIsNotificationOpen(true));
		if (action === ACTION.PROFILE) dispatch(setIsAdminModalOpen(true));
	};

	return (
		<>
			<div className={`${classHelperFn(styles.base, theme, styles)} p-3`}>
				<FlexBox row align_item="stretch">
					<FlexBox colum align_item="start">
						<Title className="title-3 text-secondary">{title}</Title>
						<Text className="text-xl text-bold pb-2 mb-2 mt-2">{value}</Text>
						{action === ACTION.NOTIFICATION && (
							<div onClick={() => clickHandler(action)}>
								<Text className={`text-secondary ${styles.linkText}`}>
									See All Complaint
								</Text>
							</div>
						)}
						{action === ACTION.PROFILE && (
							<div onClick={() => clickHandler(action)}>
								<Text className={`text-secondary ${styles.linkText}`}>
									See Orders
								</Text>
							</div>
						)}
						{action.to && (
							<Route href={action.to}>
								<Text className={`text-secondary ${styles.linkText}`}>
									{action.text}
								</Text>
							</Route>
						)}
					</FlexBox>
					<FlexBox colum align_item="center" justify_content="between">
						<FlexBox row>
							<Icon
								IconName="UP_ARROW"
								fill="green"
								height="1rem"
								width="1rem"
							/>
							<Text className="text-base text-bold text-success mx-2">
								{changes}
							</Text>
						</FlexBox>
						<Icon
							IconName={iconName}
							fill={iconFill}
							height="1.5rem"
							width="1.5rem"
						/>
					</FlexBox>
				</FlexBox>
			</div>
		</>
	);
};

export default StatsCard;
