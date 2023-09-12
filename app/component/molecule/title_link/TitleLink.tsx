"use client";
import React from "react";
import style from "./TitleLink.module.scss";
import Title from "../../atom/title/Title";
import Link from "../../atom/link/Link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/globalRedux/store";
import classHelperFn from "@/app/utlis/functions/themeClass";
import useGetClientWidth, {
	breakPoint,
} from "@/app/utlis/hooks/useGetClientWidth";

let timeout: string | number | NodeJS.Timeout | undefined;

const TitleLink = () => {
	const theme = useSelector((state: RootState) => state.theme.theme);
	const clientWidth = useGetClientWidth(timeout);

	return (
		<div className={`p-2 pb-0.5 ${classHelperFn(style.base, theme, style)}`}>
			<Link href="/" classNames={`pt-2 ${style.logo_link}`}>
				<Title className={`title-2 ${style.logo_container} text-center pb-2`}>
					{clientWidth > breakPoint.md ? "Admin Plus" : "AP"}
				</Title>
			</Link>
		</div>
	);
};

export default TitleLink;
