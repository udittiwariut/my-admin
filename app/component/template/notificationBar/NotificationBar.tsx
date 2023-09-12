"use client";
import React, { useState, useEffect, useRef } from "react";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsNotificationOpen,
	setComplaints as setComplaintsRedux,
} from "@/app/globalRedux/notification/notification.slice";
import Title from "../../atom/title/Title";
import Icon from "../../atom/icon/Icon";
import Text from "../../atom/text/Text";
import style from "./NotificationBar.module.scss";
import Button from "../../atom/button/Button";
import { getFireStoreData, COLLECTION } from "@/app/utlis/firebase/fireStore";
import { RootState } from "@/app/globalRedux/store";
import useOutSideToClose from "@/app/utlis/hooks/useOutSideToClose";
import classHelperFn, { themes } from "@/app/utlis/functions/themeClass";
import { v4 as uuid } from "uuid";

const NotificationBar = () => {
	const theme = useSelector((state: RootState) => state.theme.theme);

	const [selected, setSelected] = useState<null | number>(null);
	const [complaints, setComplaints] = useState<any>([]);
	const notificationBtnref = document.getElementById("notificationBtn");
	const dispatch = useDispatch();
	const barRef = useRef(null);

	useEffect(() => {
		const getComplaints = async () => {
			const complaints: any = await getFireStoreData(COLLECTION.COMPLAINTS);
			setComplaints(complaints);
			dispatch(setComplaintsRedux(complaints));
		};
		getComplaints();
	}, []);

	const isNotificationBarOpen = useSelector(
		(state: RootState) => state.notification.isNotificationOpen
	);

	const clickHandler = (val: boolean) => {
		dispatch(setIsNotificationOpen(val));
	};

	useOutSideToClose(barRef, clickHandler, notificationBtnref);

	return (
		<>
			{complaints.length && (
				<div
					className={`${classHelperFn(style.base, theme, style)} ${
						isNotificationBarOpen ? style.active : style.un_active
					}`}
					ref={barRef}
				>
					<div className={`${style.header}`}>
						<Title className="title-2 text-secondary fw-bold ">
							Notification
						</Title>
						<Button classNames={style.btn} onClick={() => clickHandler(false)}>
							<Icon
								className={style.icon}
								IconName="CLOSE"
								height="2rem"
								width="2rem"
							/>
						</Button>
					</div>
					<HorizontalDivider className={style.horizontal_divider} />

					<div className={style.body}>
						{complaints.map((complaint: any, i: number) => {
							return (
								<div
									key={uuid()}
									className={style.notificationBox}
									onClick={() =>
										selected === i ? setSelected(null) : setSelected(i)
									}
								>
									<div className="d-flex justify-content-between align-items-center mb-2">
										<Title className="title-4 fw-bold">
											{complaint.complaint_type}
										</Title>
										<Text
											className={
												theme === themes.LIGHT ? "text-muted" : undefined
											}
										>
											Complaint Id : {complaint.id}
										</Text>
									</div>
									<Text
										className={`${
											selected === i ? null : "text-truncate"
										} text-secondary`}
									>
										{complaint.complaint_description}
									</Text>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default NotificationBar;
