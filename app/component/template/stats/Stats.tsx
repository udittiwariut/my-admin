import { useState, useEffect } from "react";
import StatsCard from "../../organisms/StatsCard";
import FlexBox from "../../molecule/flexBox/FlexBox";
import { ACTION } from "../side-bar/Routes";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@/app/globalRedux/store";
import style from "./Stats.style.module.scss";

interface STATS_DATA {
	title: string;
	value: string;
	action: string | object;
	changes: string;
	iconName: string;
	iconFill: string;
}

const Stats = () => {
	const [statsData, setStatsData] = useState<STATS_DATA[]>([]);
	const user = useSelector((state: RootState) => state.user.user);
	const order = useSelector((state: RootState) => state.orders.orders);
	const complaints = useSelector(
		(state: RootState) => state.notification.notification
	);

	useEffect(() => {
		const data = [
			{
				title: "USERS",
				value: user.length.toString(),
				action: {
					to: "/users",
					text: "Home",
				},
				changes: "+5%",
				iconName: "USER",
				iconFill: "#6650f2",
			},
			{
				title: "ORDERS",
				value: order.length.toString(),
				action: {
					to: "/orders",
					text: "View all orders",
				},

				changes: "+2%",
				iconName: "CART",
				iconFill: "#F6BE00",
			},
			{
				title: "EARNINGS",
				value: "$4.6K",
				action: ACTION.PROFILE,
				changes: "+12%",
				iconName: "RUPEE",
				iconFill: "#85bb65",
			},
			{
				title: "Complaint",
				value: complaints.length.toString(),
				action: ACTION.NOTIFICATION,
				changes: "+5%",
				iconName: "Exclamation",
				iconFill: "#E03131",
			},
		];
		setStatsData(data);
	}, [user, order, complaints]);

	return (
		<div className={style.base} id="stats_id">
			{statsData.map((cardDetail) => {
				return (
					<StatsCard
						key={cardDetail.title}
						title={cardDetail.title}
						action={cardDetail.action}
						changes={cardDetail.changes}
						iconName={cardDetail.iconName}
						iconFill={cardDetail.iconFill}
						value={cardDetail.value}
					/>
				);
			})}
		</div>
	);
};

export default Stats;
