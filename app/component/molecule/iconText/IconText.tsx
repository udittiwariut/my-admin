import React, { useEffect, useState } from "react";
import Icon from "../../atom/icon/Icon";
import Text from "../../atom/text/Text";
import useGetClientWidth, {
	breakPoint,
} from "@/app/utlis/hooks/useGetClientWidth";

interface props {
	className?: string;
	iconName: string;
	href?: string | null;
	children: React.ReactNode;
	iconFill?: string;
	position?: "left" | "right";
}

const IconText = ({
	className = undefined,
	iconName,
	children,
	iconFill = "black",
	position = "left",
}: props) => {
	const screenWidth = useGetClientWidth();

	return (
		<div className={`d-flex align-items-start  ${className}`}>
			{position === "left" && (
				<Icon IconName={iconName} fill={iconFill} width="1rem" height="1rem" />
			)}

			{screenWidth > breakPoint.md && <Text>{children}</Text>}
			{position === "right" && (
				<Icon IconName={iconName} fill={iconFill} width="1rem" height="1rem" />
			)}
		</div>
	);
};
export default IconText;
