import React from "react";
import style from "./Progress.module.scss";

interface props {
	progress: number;
}

const Progress = ({ progress }: props) => {
	return (
		<svg
			className={style.circle_container}
			viewBox="2 -2 28 36"
			xmlns="http://www.w3.org/2000/svg"
		>
			<text className={style.text} transform="translate(14, 13) rotate(90)">
				{progress.toString()}%
			</text>

			<circle
				className={style.circle_container__background}
				r="16"
				cx="16"
				cy="16"
			></circle>
			<circle
				className={style.circle_container__progress}
				r="16"
				cx="16"
				cy="16"
				style={{ strokeDashoffset: 100 - progress }}
			></circle>
		</svg>
	);
};

export default Progress;
