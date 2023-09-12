"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../component/template/table/Table";
import style from "./page.module.scss";
import Text from "../component/atom/text/Text";
import DropDown from "../component/organisms/drop_down/DropDown";
import IconText from "../component/molecule/iconText/IconText";
import PaginationBox from "../component/organisms/pagination_box/PaginationBox";
import Modal from "../component/template/modal/Modal";
import ProductModal from "../component/template/modal/product_modal/ProductModal";
import { getFireStoreData, COLLECTION } from "../utlis/firebase/fireStore";
import { PRODUCT } from "../Types/Product/Product";
import LoaderHoc from "../component/template/loaderHoc/LoaderHoc";
import { setProduct as setProductRedux } from "../globalRedux/product/product.slice";
import Button from "../component/atom/button/Button";
import { RootState } from "../globalRedux/store";
import classHelperFn, { themes } from "../utlis/functions/themeClass";

const optionArray = [5, 10, 15, 20, 25];

const ProductPage = () => {
	const theme = useSelector((state: RootState) => state.theme.theme);

	const [paginationValue, setPaginationValue] = useState(5);
	const [pages, setPages] = useState({ currentPage: 1, totalPages: 0 });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [product, setProduct] = useState<null | PRODUCT>(null);
	const [activeDropDown, setActiveDropDown] = useState(false);

	const products: PRODUCT[] = useSelector(
		(state: RootState) => state.product.product
	);

	useEffect(() => {
		const totalPage = Math.ceil(products.length / paginationValue);
		if (totalPage) {
			setPages({
				currentPage:
					pages.currentPage > totalPage ? totalPage : pages.currentPage,
				totalPages: totalPage,
			});
		}
	}, [paginationValue, products.length]);

	const filteredProduct = useMemo(
		() =>
			products?.filter(
				(_, i) =>
					i >= paginationValue * (pages.currentPage - 1) &&
					i < paginationValue * pages.currentPage
			),
		[paginationValue, pages.currentPage, products.length]
	);

	const onOptClick = (e: any) =>
		setPaginationValue(e.target.childNodes[0].data);

	const dropDownBtnRef = document.getElementById("dropDownBtnProduct");
	return (
		<LoaderHoc arrayToCheck={products}>
			<div className={classHelperFn(style.base, theme, style)}>
				<div className={style.header}>
					<Text className="text-secondary p-3">All Products</Text>
					<div>
						<div id="dropDownBtnProduct">
							<Button
								onClick={() => setActiveDropDown(!activeDropDown)}
								classNames={style.buttonStyleBaseDropDownP}
							>
								<IconText
									iconFill={theme === themes.Dark ? "#aeadad" : "black"}
									className={style.dropDownBtn}
									position="right"
									iconName="DOWN_ARROW"
									textImportant
								>
									{paginationValue}
								</IconText>
							</Button>
						</div>
						<DropDown
							activeDropDown={activeDropDown}
							setActiveDropDown={setActiveDropDown}
							secondaryRef={dropDownBtnRef}
						>
							{optionArray.map((ele) => (
								<div onClick={onOptClick} className={style.dropDownMenuItem}>
									{ele}
								</div>
							))}
						</DropDown>
					</div>
				</div>
				<Table
					tableContent={filteredProduct}
					sNo={paginationValue * (pages.currentPage - 1)}
					setIsModalOpen={setIsModalOpen}
					isModalOpen={isModalOpen}
					setItem={setProduct}
					fieldNotToInclude={["img"]}
					isDetailPresent={true}
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
		</LoaderHoc>
	);
};

export default ProductPage;
