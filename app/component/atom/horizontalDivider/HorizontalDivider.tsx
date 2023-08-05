import React from "react";
import style from "./HorizontalDivider.module.scss";
interface Props {
	className: string;
}

const HorizontalDivider = ({ className }: Props) => {
	return <div className={`${style.base} ${className}`}></div>;
};
export default HorizontalDivider;
