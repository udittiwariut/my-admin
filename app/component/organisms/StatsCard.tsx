import styles from "./statsCard.module.scss";
import Title from "./../atom/title/Title";
import Text from "./../atom/text/Text";
import Route from "./../atom/link/Link";
import Icon from "./../atom/icon/Icon";
import FlexBox from "./../molecule/flexBox/FlexBox";

interface props {
	className?: string;
	title: string;
	to: string;
	linkText: String;
	changes: String;
	iconName: string;
	iconFill: string;
	value: string;
}

const StatsCard = ({
	title,
	to,
	linkText,
	changes,
	iconName,
	iconFill,
	value,
}: props) => {
	console.log(to, linkText);

	return (
		<div className={`${styles.base} p-3`}>
			<FlexBox row align_item="stretch">
				<FlexBox colum align_item="start">
					<Title className="title-3 text-secondary">{title}</Title>
					<Text className="text-xl text-bold pb-2 mb-2 mt-2">{value}</Text>
					<Route href={to}>
						<Text className="text-sm text-bold underLine tex">{linkText}</Text>
					</Route>
				</FlexBox>
				<FlexBox colum align_item="center" justify_content="between">
					<FlexBox row>
						<Icon IconName="UP_ARROW" fill="green" height="1rem" width="1rem" />
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
	);
};

export default StatsCard;
