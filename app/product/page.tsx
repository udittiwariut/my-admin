"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
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

const optionArray = [5, 10, 15, 20, 25];

const ProductPage = () => {
	const [fetchProduct, setFetchProduct] = useState<PRODUCT[]>([]);
	const [paginationValue, setPaginationValue] = useState(5);
	const [pages, setPages] = useState({ currentPage: 1, totalPages: 0 });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [product, setProduct] = useState<null | PRODUCT>(null);
	const [activeDropDown, setActiveDropDown] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		const totalPage = Math.ceil(fetchProduct.length / paginationValue);
		if (totalPage) {
			setPages({
				currentPage:
					pages.currentPage > totalPage ? totalPage : pages.currentPage,
				totalPages: totalPage,
			});
		}
	}, [paginationValue, fetchProduct.length]);

	const filteredProduct = useMemo(
		() =>
			fetchProduct?.filter(
				(_, i) =>
					i >= paginationValue * (pages.currentPage - 1) &&
					i < paginationValue * pages.currentPage
			),
		[paginationValue, pages.currentPage, fetchProduct.length]
	);

	useEffect(() => {
		const fetchProduct = async () => {
			const productArray: PRODUCT[] = [];
			const product: any = await getFireStoreData(COLLECTION.PRODUCT);

			product.forEach((product: PRODUCT) => {
				const obj = {
					product_id: product.product_id,
					product_name: product.product_name,
					category: product.category,
					price_usd: product.price_usd,
					stock_quantity: product.stock_quantity,
					brand: product.brand,
					img:
						product.img ||
						"https://res.cloudinary.com/dmbtc9axm/image/upload/v1692442091/pexels-manav-sharma-3392232_hcrpez.jpg",
				};
				productArray.push(obj);
			});
			productArray.sort((a, b) => a.product_id - b.product_id);

			setFetchProduct(productArray);
			dispatch(setProductRedux(productArray));
		};
		fetchProduct();
	}, []);

	const onOptClick = (e: any) =>
		setPaginationValue(e.target.childNodes[0].data);

	const dropDownBtnRef = document.getElementById("dropDownBtnProduct");
	return (
		<LoaderHoc arrayToCheck={fetchProduct}>
			<>
				<div className={style.base}>
					<div className={style.header}>
						<Text className="text-secondary p-3">All Products</Text>
						<div>
							<div id="dropDownBtnProduct">
								<Button
									onClick={() => setActiveDropDown(!activeDropDown)}
									classNames={style.buttonStyleBaseDropDownP}
								>
									<IconText
										className={style.dropDownBtn}
										position="right"
										iconName="DOWN_ARROW"
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
		</LoaderHoc>
	);
};

export default ProductPage;
