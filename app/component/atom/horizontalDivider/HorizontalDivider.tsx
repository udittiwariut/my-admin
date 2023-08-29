import React from "react";
import style from "./HorizontalDivider.module.scss";
interface Props {
	className?: string;
}

const HorizontalDivider = ({ className = undefined }: Props) => {
	return <div className={`${style.base} ${className}`}></div>;
};
export default HorizontalDivider;
