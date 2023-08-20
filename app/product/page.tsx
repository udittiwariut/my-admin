"use client";
import React, { useState, useMemo, useEffect } from "react";
import Table from "../component/template/table/Table";
import style from "./page.module.scss";
import Text from "../component/atom/text/Text";
import DropDown from "../component/organisms/drop_down/DropDown";
import IconText from "../component/molecule/iconText/IconText";
import Product from "./../../data/Product.json";
import PaginationBox from "../component/organisms/pagination_box/PaginationBox";
import Modal from "../component/template/modal/Modal";
import ProductModal from "../component/template/modal/product_modal/ProductModal";
import { PRODUCT } from "../Types/Product/Product";
const array = [5, 10, 15, 20, 25];

const ProductPage = () => {
	const [paginationValue, setPaginationValue] = useState(5);
	const [pages, setPages] = useState({ currentPage: 1, totalPages: 0 });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [product, setProduct] = useState<null | PRODUCT>(null);

	useEffect(() => {
		const totalPage = Math.ceil(Product.products.length / paginationValue);
		setPages({
			currentPage:
				pages.currentPage > totalPage ? totalPage : pages.currentPage,
			totalPages: totalPage,
		});
	}, [paginationValue]);

	const filteredUser = useMemo(
		() =>
			Product.products.filter(
				(_, i) =>
					i >= paginationValue * (pages.currentPage - 1) &&
					i < paginationValue * pages.currentPage
			),
		[paginationValue, pages.currentPage]
	);

	return (
		<>
			<div className={style.base}>
				<div className={style.header}>
					<Text className="text-secondary p-3">All Users</Text>
					<DropDown
						onOptClick={(e) => setPaginationValue(e.target.childNodes[0].data)}
						dropDownMenuItemStyle={style.dropDownMenuItem}
						optionArray={array}
					>
						<IconText
							className={style.dropDownBtn}
							position="right"
							iconName="DOWN_ARROW"
						>
							{paginationValue}
						</IconText>
					</DropDown>
				</div>
				<Table
					tableContent={filteredUser}
					sNo={paginationValue * (pages.currentPage - 1)}
					setIsModalOpen={setIsModalOpen}
					isModalOpen={isModalOpen}
					setItem={setProduct}
					fieldNotToInclude={["img"]}
				/>
				<div className={style.footer}>
					<PaginationBox pages={pages} setPages={setPages} />
				</div>
			</div>
			{isModalOpen && (
				<Modal closeModal={setIsModalOpen} title="Product Detail">
					<ProductModal product={product} />
				</Modal>
			)}
		</>
	);
};

export default ProductPage;
