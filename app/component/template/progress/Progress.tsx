"use client";
import React from "react";
import Title from "../../atom/title/Title";
import Progress from "../../atom/progress/Progress";
import Text from "../../atom/text/Text";

import styles from "./progress.module.scss";
import IconText from "../../molecule/iconText/IconText";
import { RootState } from "@/app/globalRedux/store";
import classHelperFn from "@/app/utlis/functions/themeClass";
import { useSelector } from "react-redux";
import style from "styled-jsx/style";

const data = [
	{ title: "Total Revenue", value: "$12.4k", isIncreased: false },
	{ title: "Total Revenue", value: "$12.4k", isIncreased: true },
	{ title: "Total Revenue", value: "$12.4k", isIncreased: false },
];

const ProgressCard = () => {
	const theme = useSelector((state: RootState) => state.theme.theme);

	return (
		<div className={classHelperFn(styles.base, theme, styles)}>
			<Title className="title-2 text-secondary fw-bold pb-2 pt-1">
				Total Revenue
			</Title>
			<Progress progress={70} />
			<Title className="title-3 text-secondary fw-normal">
				Total sale made today
			</Title>
			<Text className="text-xl text-bold mb-2 mt-2">$420</Text>
			<Text className="text-secondary text-sm  ">
				Previous transaction is processing. Last payment may not be Included{" "}
			</Text>
			<div className={`${styles.grid} pt-4`}>
				{data.map((ele) => {
					return (
						<div className={`${styles.gridItem}`}>
							<Title className="title-4 text-secondary fw-normal">
								{ele.title}
							</Title>
							<IconText
								iconFill={ele.isIncreased ? "green" : "red"}
								iconName={ele.isIncreased ? "UP_ARROW" : "DOWN_ARROW"}
								className="justify-content-center pt-2 gap-2"
							>
								{ele.value}
							</IconText>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProgressCard;
