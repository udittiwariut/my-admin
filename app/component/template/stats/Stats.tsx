import StatsCard from "../../organisms/StatsCard";
import FlexBox from "../../molecule/flexBox/FlexBox";
import style from "./Stats.style.module.scss";

const data = [
	{
		title: "USERS",
		value: "720",
		link: {
			to: "/",
			text: "Home",
		},
		changes: "+5%",
		iconName: "USER",
		iconFill: "#6650f2",
	},
	{
		title: "ORDERS",
		value: "260",
		link: {
			to: "/o",
			text: "View all orders",
		},
		changes: "+2%",
		iconName: "CART",
		iconFill: "#F6BE00",
	},
	{
		title: "EARNINGS",
		value: "$4.6K",
		link: {
			to: "/",
			text: "View net earnings",
		},
		changes: "+12%",
		iconName: "RUPEE",
		iconFill: "#85bb65",
	},
	{
		title: "MY BALANCE",
		value: "$4.8K",
		link: {
			to: "/user",
			text: "See details",
		},
		changes: "+5%",
		iconName: "WALLET",
		iconFill: "#b3b0e7",
	},
];

const Stats = () => {
	return (
		<FlexBox row justify_content="around" className={style.base}>
			{data.map((cardDetail) => {
				return (
					<StatsCard
						key={cardDetail.title}
						title={cardDetail.title}
						to={cardDetail.link.to}
						linkText={cardDetail.link.text}
						changes={cardDetail.changes}
						iconName={cardDetail.iconName}
						iconFill={cardDetail.iconFill}
						value={cardDetail.value}
					/>
				);
			})}
		</FlexBox>
	);
};

export default Stats;
