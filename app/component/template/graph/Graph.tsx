"use client";
import React from "react";
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
	TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

const data = {
	labels: mockData.map((ele) => ele.name),
	datasets: [
		{
			fill: true,
			label: "Dataset 2",
			data: mockData.map((ele) => ele.Total),
			borderColor: "#b3b0e7",
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
					gradient.addColorStop(0, "#b3b0e7");
					gradient.addColorStop(1, "#fff");
					return gradient;
				}
			},
		},
	],
};

const Graph = () => {
	return <Line options={options} data={data}></Line>;
};

export default Graph;
