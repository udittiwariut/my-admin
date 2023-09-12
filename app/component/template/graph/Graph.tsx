"use client";
import React, { useEffect, useState, useRef } from "react";
import GraphTitle from "../../atom/title/Title";
import { useSelector } from "react-redux";
import style from "./Graph.module.scss";
import { themes } from "@/app/utlis/functions/themeClass";
import useGetClientWidth, {
	breakPoint,
} from "@/app/utlis/hooks/useGetClientWidth";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
	ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { RootState } from "@/app/globalRedux/store";
import classHelperFn from "@/app/utlis/functions/themeClass";

const mockData = [
	{ name: "January", Total: 1200 },
	{ name: "February", Total: 2100 },
	{ name: "March", Total: 800 },
	{ name: "April", Total: 1600 },
	{ name: "May", Total: 900 },
	{ name: "June", Total: 1700 },
];

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const coloObj = {
	light: { top: "#b3b0e7", bottom: "#fff" },
	dark: { top: "#2e2a82", bottom: "#5651a4" },
};

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
	elements: {
		line: {
			tension: 0.4,
		},
	},
};

let timeout: string | number | NodeJS.Timeout | undefined;
let timeOut2: string | number | NodeJS.Timeout | undefined;

let delay = 200;

const Graph = () => {
	const [data, setData] = useState<any>();
	const [chartDivWidth, setChartDivWidth] = useState<string>("98%");
	const clientWidth = useGetClientWidth(timeOut2);

	const theme = useSelector((state: RootState) => state.theme.theme);

	const ProgressCardRefDiv = document.getElementById("ProgressCard");

	const debounce = () => {
		if (!ProgressCardRefDiv) {
			return;
		}
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			if (clientWidth > 700) {
				setChartDivWidth(
					(ProgressCardRefDiv.offsetWidth * 2).toString() + "px"
				);
			}
			if (clientWidth < 700) {
				setChartDivWidth("95%");
			}
		}, delay);
	};

	useEffect(() => {
		window.addEventListener("resize", debounce);
	}, [ProgressCardRefDiv]);

	useEffect(() => {
		const data = {
			labels: mockData.map((ele) => ele.name),
			datasets: [
				{
					fill: true,
					label: "Dataset 2",
					data: mockData.map((ele) => ele.Total),
					borderColor:
						theme === themes.Dark ? coloObj.dark.top : coloObj.light.top,
					backgroundColor: (context: ScriptableContext<"line">) => {
						const area = context.chart.chartArea;
						if (area) {
							const ctx = context.chart.ctx;
							const gradient = ctx.createLinearGradient(
								0,
								area.top,
								0,
								area.bottom
							);
							gradient.addColorStop(
								0,
								theme === themes.Dark ? coloObj.dark.top : coloObj.light.top
							);
							gradient.addColorStop(
								1,
								theme === themes.Dark
									? coloObj.dark.bottom
									: coloObj.light.bottom
							);
							return gradient;
						}
					},
				},
			],
		};
		setData(data);
	}, [theme]);

	return (
		<div className={classHelperFn(style.base, theme, style)}>
			<GraphTitle className={`title-2 pb-1 pt-1 text-secondary px-5`}>
				Sale in last six month
			</GraphTitle>
			<div
				className={style.chartBox}
				style={{ maxWidth: "99%", height: "24rem" }}
			>
				{data && (
					<Line
						updateMode="resize"
						options={{ ...options, maintainAspectRatio: false, aspectRatio: 1 }}
						data={data}
						className={style.chart}
					></Line>
				)}
			</div>
		</div>
	);
};

export default Graph;
