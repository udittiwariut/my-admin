import classStringToArray from "./../../../utlis/functions/class";
import styles from "./flexBox.module.scss";
import classNames from "classnames";
interface props {
	className?: string;
	children: React.ReactNode;
	row?: Boolean;
	colum?: Boolean;
	align_item?: "start" | "end" | "center" | "baseline" | "stretch";
	justify_content?: "start" | "end" | "center" | "between" | "around";
}
const FlexBox = ({
	className = undefined,
	children,
	row = false,
	colum = false,
	align_item = "center",
	justify_content = "between",
}: props) => {
	return (
		<div
			className={`d-flex justify-content-${justify_content} align-items-${align_item} ${classNames(
				{
					"flex-column": colum,
					"flex-row": row,
				}
			)} ${classStringToArray(className, styles)}`}
		>
			{children}
		</div>
	);
};
export default FlexBox;
