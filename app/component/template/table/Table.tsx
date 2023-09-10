import React, { Dispatch, SetStateAction, useMemo } from "react";
import style from "./Table.module.scss";
import { RootState } from "@/app/globalRedux/store";
import classHelperFn from "@/app/utlis/functions/themeClass";
import { useSelector } from "react-redux";

interface props {
	tableContent: object[];
	sNo?: number;
	setIsModalOpen?: (value: boolean) => void;
	isModalOpen?: boolean;
	classNames?: string;
	fieldNotToInclude?: string[];
	setItem?: Dispatch<SetStateAction<any>>;
}

const Table = ({
	tableContent = [],
	sNo = 0,
	setIsModalOpen = () => {},
	isModalOpen = false,
	classNames = undefined,
	fieldNotToInclude = [],
	setItem = () => {},
}: props) => {
	if (!tableContent.length) {
		return;
	}

	const theme = useSelector((state: RootState) => state.theme.theme);

	const title = Object.keys(tableContent[0]).filter((th) => {
		if (!fieldNotToInclude.includes(th)) {
			return th;
		}
	});

	return (
		tableContent.length > 0 && (
			<div className={style.wrapper}>
				<table
					className={`${classHelperFn(style.base, theme, style)} ${classNames}`}
				>
					<thead>
						<tr>
							<th className="p-3">#</th>
							{title.map((th) => (
								<th className="p-3">{th.replace("_", "").toUpperCase()}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tableContent.map((ele, i) => {
							return (
								<tr
									onClick={() => {
										setIsModalOpen(!isModalOpen);
										setItem(ele);
									}}
								>
									<th className="p-3">{sNo + (i + 1)}</th>
									{title.map((key) => (
										<td
											data-cell={key.replace("_", "").toUpperCase()}
											className={style.tableData}
										>
											{ele[key as keyof typeof ele]}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		)
	);
};

export default Table;
