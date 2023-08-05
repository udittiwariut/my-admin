import React from "react";
import Icon from "../../atom/icon/Icon";
import Route from "../../atom/link/Link";
import styles from "./IconLink.module.scss";

interface props {
	className?: string;
	iconName: string;
	href: string;
	text: string;
}

const IconLink = ({
	className = undefined,
	iconName,
	href = "/",
	text,
}: props) => {
	return (
		<div className={`d-flex align-items-start  ${className}`}>
			<Icon IconName={iconName} width="1rem" height="1rem" />
			<Route href={href} classNames="flex-grow-1">
				{text}
			</Route>
		</div>
	);
};
export default IconLink;
