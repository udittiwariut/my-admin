import React from "react";
import Image from "next/image";
import style from "./Avatar.module.scss";

interface props {
	link: string;
	classNames?: string;
}

const Avatar = ({ link, classNames = undefined }: props) => {
	return (
		<div className={`${style.base} ${classNames}`}>
			<img className={style.img} src={link}></img>
		</div>
	);
};

export default Avatar;
