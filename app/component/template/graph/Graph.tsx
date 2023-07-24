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
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Chart.js Line Chart",
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

			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

const Graph = () => {
	return (
		<div>
			<Line
				options={options}
				data={data}
				style={{ borderColor: "Highlight" }}
			></Line>
		</div>
	);
};

export default Graph;
