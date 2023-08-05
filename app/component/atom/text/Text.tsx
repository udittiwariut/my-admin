import React from "react";
import styles from "./Test.module.scss";
import classStringToArray from "./../../../utlis/functions/class";

interface props {
	className?: string;
	children: React.ReactNode;
}

const Text = ({ className = undefined, children }: props) => {
	return (
		<div className={classStringToArray(className, styles)}>{children}</div>
	);
};

export default Text;
