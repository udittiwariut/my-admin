import React from "react";
import styles from "./Title.module.scss";
import classStringToArray from "./../../../utlis/functions/class";

interface props {
	className?: string;
	children: React.ReactNode;
}

const Title = ({ className, children }: props) => {
	return (
		<div className={classStringToArray(className, styles)}>{children}</div>
	);
};

export default Title;
