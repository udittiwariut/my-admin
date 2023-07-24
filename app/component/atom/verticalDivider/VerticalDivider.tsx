import React from "react";
import style from "./VerticalDivider.module.scss";

interface Props {
	className: string;
}

const VerticalDivider = ({ className }: Props) => {
	return <div className={`${style.base} ${className}`}></div>;
};

export default VerticalDivider;
