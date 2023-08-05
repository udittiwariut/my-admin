"use client";
import Icons from "./../../../../icon/IconRoot";
import style from "./Icon.module.scss";
interface Props {
	fill?: String;
	color?: String;
	height?: String;
	width?: String;
	IconName: string;
	onClick?: () => any;
	className?: string;
}

const Icon = ({
	fill = "full",
	color = "black",
	height = "1rem",
	width = "1rem",
	IconName,
	className,
	onClick = () => null,
}: Props) => {
	const IconToRender = Icons[IconName];

	return (
		<div className={`${style.base} ${className} `} onClick={onClick}>
			<IconToRender fill={fill} height={height} width={width} />
		</div>
	);
};

export default Icon;
