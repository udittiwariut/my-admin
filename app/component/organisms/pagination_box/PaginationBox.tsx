import React, { Dispatch, SetStateAction } from "react";
import Button from "../../atom/button/Button";
import style from "./PaginationBox.module.scss";

interface props {
	pages: { currentPage: number; totalPages: number };
	setPages: Dispatch<
		SetStateAction<{ currentPage: number; totalPages: number }>
	>;
	classNames?: string | undefined;
}

const PaginationBox = ({ pages, setPages, classNames = undefined }: props) => {
	return (
		<div className={style.base}>
			{pages.currentPage > 1 && (
				<Button
					classNames={style.btn}
					onClick={() =>
						setPages({ ...pages, currentPage: pages.currentPage - 1 })
					}
				>
					{pages.currentPage - 1}
				</Button>
			)}
			<Button
				onClick={() => {}}
				classNames={`${style.btn} ${style.currentPage}`}
			>
				{pages.currentPage}
			</Button>
			{pages.currentPage < pages.totalPages && (
				<Button
					onClick={() =>
						setPages({ ...pages, currentPage: pages.currentPage + 1 })
					}
					classNames={style.btn}
				>
					{pages.currentPage + 1}
				</Button>
			)}
		</div>
	);
};

export default PaginationBox;
