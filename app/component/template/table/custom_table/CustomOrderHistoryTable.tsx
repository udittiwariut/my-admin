import React, { Dispatch, SetStateAction } from "react";
import style from "./CustomOrderHistoryTable.module.scss";
import { ORDER, ORDER_ITEM } from "@/app/Types/Order/Order";
import Table from "../Table";
import HorizontalDivider from "@/app/component/atom/horizontalDivider/HorizontalDivider";

interface props {
	tableContent: ORDER[];
	sNo?: number;
	setIsDetailOpen?: Dispatch<SetStateAction<number | null>>;
	isDetailOpen?: number | null;
	classNames?: string;
	fieldNotToInclude?: string[];
}

const CustomOrderHistoryTable = ({
	tableContent,
	sNo = 0,
	setIsDetailOpen = () => {},
	isDetailOpen = null,
	classNames = undefined,
	fieldNotToInclude = [],
}: props) => {
	const title = Object.keys(tableContent[0]).filter((th) => {
		if (!fieldNotToInclude.includes(th)) {
			return th;
		}
	});

	const handleClick = (i: number) => {
		if (i === isDetailOpen) {
			setIsDetailOpen(null);
			return;
		}
		setIsDetailOpen(i);
	};

	return (
		tableContent.length > 0 && (
			<div className={`${style.base}`}>
				<div>
					<div
						className={style.orderTableHeader}
						style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
					>
						<div className="p-3">#</div>
						{title.map((th) => (
							<div className="p-3">{th.replace("_", "").toUpperCase()}</div>
						))}
					</div>
					<HorizontalDivider />
					<div>
						{tableContent.map((ele, i) => {
							return (
								<>
									<div
										onClick={() => handleClick(i)}
										className={style.orderTableRow}
										style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
									>
										<div className={`p-3`}>{sNo + (i + 1)}</div>
										{title.map((key) => (
											<div className={`p-3`}>{ele[key]}</div>
										))}
									</div>
									{isDetailOpen === i ? (
										<div className={style.orderDetail}>
											<Table tableContent={ele.order_items} />
										</div>
									) : null}
								</>
							);
						})}
					</div>
				</div>
			</div>
		)
	);
};

export default CustomOrderHistoryTable;
