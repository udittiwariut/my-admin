"use client";
import React, { useState } from "react";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import { useDispatch, useSelector } from "react-redux";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import Title from "../../atom/title/Title";
import Icon from "../../atom/icon/Icon";
import Text from "../../atom/text/Text";
import Complaints from "./../../../../data/Complaints.json";
import style from "./NotificationBar.module.scss";
import Button from "../../atom/button/Button";

const NotificationBar = () => {
	const [selected, setSelected] = useState<null | number>(null);
	const dispatch = useDispatch();
	const isNotificationBarOpen = useSelector(
		(state) => state.notification.isNotificationOpen
	);
	const clickHandler = () => {
		dispatch(setIsNotificationOpen(false));
	};
	return (
		<div
			className={`${style.base} ${isNotificationBarOpen ? style.active : null}`}
		>
			<div className={`${style.header} p-2`}>
				<Title className="title-2 text-secondary fw-bold">Notification</Title>
				<Button onClick={clickHandler}>
					<Icon
						className={style.icon}
						IconName="CLOSE"
						height="2rem"
						width="2rem"
					/>
				</Button>
			</div>
			<HorizontalDivider />

			<div className={style.body}>
				{Complaints.complaints.map((complaint, i) => {
					return (
						<div
							className={style.notificationBox}
							onClick={() =>
								selected === i ? setSelected(null) : setSelected(i)
							}
						>
							<div className="d-flex justify-content-between align-items-center mb-2">
								<Title className="title-4 fw-bold">
									{complaint.complaint_type}
								</Title>
								<Text className="text-muted">
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
	);
};

export default NotificationBar;
