import React from "react";
import style from "./Button.module.scss";

interface props {
	children: React.ReactNode;
	classNames?: string | undefined;
	onClick: () => void;
}

const Button = ({ classNames = undefined, children, onClick }: props) => {
	return (
		<button onClick={onClick} className={`${style.base} ${classNames}`}>
			{children}
		</button>
	);
};

export default Button;
