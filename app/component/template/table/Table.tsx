import React, { Dispatch, SetStateAction } from "react";
import style from "./Table.module.scss";

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
	const title = Object.keys(tableContent[0]).filter((th) => {
		if (!fieldNotToInclude.includes(th)) {
			return th;
		}
	});

	return (
		tableContent.length > 0 && (
			<div className={`${style.base}`}>
				<table className="table">
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
										<td className="p-3">{ele[key as keyof typeof ele]}</td>
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
