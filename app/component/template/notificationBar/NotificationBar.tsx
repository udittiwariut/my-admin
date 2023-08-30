"use client";
import React, { useState, useEffect, useRef } from "react";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";
import { useDispatch, useSelector } from "react-redux";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import Title from "../../atom/title/Title";
import Icon from "../../atom/icon/Icon";
import Text from "../../atom/text/Text";
import style from "./NotificationBar.module.scss";
import Button from "../../atom/button/Button";
import { getFireStoreData, COLLECTION } from "@/app/utlis/firebase/fireStore";
import { RootState } from "@/app/globalRedux/store";
import useOutSideToClose from "@/app/utlis/hooks/useOutSideToClose";

const NotificationBar = () => {
	const [selected, setSelected] = useState<null | number>(null);
	const [complaints, setComplaints] = useState<any>([]);
	useEffect(() => {
		const getComplaints = async () => {
			const complaints: any = await getFireStoreData(COLLECTION.COMPLAINTS);
			setComplaints(complaints);
		};
		getComplaints();
	}, []);
	const dispatch = useDispatch();
	const barRef = useRef(null);
	const isNotificationBarOpen = useSelector(
		(state: RootState) => state.notification.isNotificationOpen
	);
	const clickHandler = (val: boolean) => {
		dispatch(setIsNotificationOpen(val));
	};

	useOutSideToClose(barRef, clickHandler);

	return (
		<>
			{complaints.length && (
				<div
					className={`${style.base} ${
						isNotificationBarOpen ? style.active : style.un_active
					}`}
					ref={barRef}
				>
					<div className={`${style.header} p-2`}>
						<Title className="title-2 text-secondary fw-bold">
							Notification
						</Title>
						<Button onClick={() => clickHandler(false)}>
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
						{complaints.map((complaint, i) => {
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
			)}
		</>
	);
};

export default NotificationBar;
