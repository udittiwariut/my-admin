import React from "react";
import Icon from "../../atom/icon/Icon";
import Text from "../../atom/text/Text";

interface props {
	className?: string;
	iconName: string;
	href?: string | null;
	children: React.ReactNode;
	iconFill: string;
}

const IconText = ({
	className = undefined,
	iconName,
	children,
	iconFill = "black",
}: props) => {
	return (
		<div className={`d-flex align-items-start  ${className}`}>
			<Icon IconName={iconName} fill={iconFill} width="1rem" height="1rem" />
			<Text>{children}</Text>
		</div>
	);
};
export default IconText;
