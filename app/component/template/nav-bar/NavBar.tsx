"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Icon from "../../atom/icon/Icon";
import SearchBar from "../../molecule/searchBar/SearchBar";
import NavIcon from "../../organisms/nav_icon/NavIcon";
import { useDispatch, useSelector } from "react-redux";
import { setIsNotificationOpen } from "@/app/globalRedux/notification/notification.slice";
import { setIsAdminModalOpen } from "@/app/globalRedux/admin/admin.slice";
import styles from "./Navbar.module.scss";
import { ACTION } from "./../side-bar/Routes";
import { RootState } from "@/app/globalRedux/store";
import DropDown from "../../organisms/drop_down/DropDown";
import useMatchSearchItem from "@/app/utlis/hooks/useMatchSearchItem";
import DropDownList from "../../molecule/drop_down_list/DropDownList";
import { RESULT } from "@/app/utlis/hooks/useMatchSearchItem";
import ProductModal from "../modal/product_modal/ProductModal";
import Modal from "../modal/Modal";
import UserModal from "../modal/user_modal/UserModal";
import { setTheme } from "@/app/globalRedux/theme/theme.slice";
import classHelperFn, { themes } from "@/app/utlis/functions/themeClass";
import { setSelectedOrder } from "@/app/globalRedux/orders/order.slice";

const modalType = {
	ORDER: "orders",
	USER: "users",
	PRODUCT: "product",
	COMPLAINTS: "complaints",
};

const NavBar = () => {
	const url = usePathname();

	const router = useRouter();
	const user = useSelector((state: RootState) => state.user.user).slice(0, 3);
	const orders = useSelector((state: RootState) => state.orders.orders).slice(
		0,
		3
	);
	const product = useSelector(
		(state: RootState) => state.product.product
	).slice(0, 3);

	const complaints = useSelector(
		(state: RootState) => state.notification.notification
	).slice(0, 3);

	const theme = useSelector((state: RootState) => state.theme.theme);

	const isNotificationBarOpen = useSelector(
		(state: RootState) => state.notification.isNotificationOpen
	);
	const isAdminModalOpen = useSelector(
		(state: RootState) => state.Admin.isAdminModalOpen
	);

	const [searchTerm, setSearchTerm] = useState("");
	const [activeDropDown, setActiveDropDown] = useState(false);
	const [resultFromSearch, setResultFromSearch] = useState<RESULT>({
		users: user,
		orders: orders,
		product: product,
		complaints: complaints,
	});
	const [selectedItem, setSelectedItem] = useState<any>({
		type: "",
		item: {},
	});
	const [isModalOpen, setIsModalOpen] = useState(false);

	const dispatch = useDispatch();

	const result = useMatchSearchItem(searchTerm);

	useEffect(() => {
		if (searchTerm) setResultFromSearch(result);
		if (!searchTerm)
			setResultFromSearch({
				users: user,
				orders: orders,
				product: product,
				complaints: complaints,
			});
	}, [result, user.length, orders.length, product.length, complaints.length]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const clickHandler = (action: string) => {
		if (action === ACTION.NOTIFICATION)
			dispatch(setIsNotificationOpen(!isNotificationBarOpen));
		if (action === ACTION.PROFILE)
			dispatch(setIsAdminModalOpen(!isAdminModalOpen));
		if (action === ACTION.THEME) {
			dispatch(setTheme(theme === themes.Dark ? themes.LIGHT : themes.Dark));
		}
	};

	const handleDropDownListClick = (selectedItem: any, title: string) => {
		if (title === modalType.ORDER) {
			dispatch(setSelectedOrder(selectedItem.order_id));
			if (!url.includes("orders")) {
				router.push(`/orders?orderId=${selectedItem.order_id}`);
				return;
			}
		}
		if (title === modalType.COMPLAINTS) {
			dispatch(setIsNotificationOpen(true));
		}
		setSelectedItem({ type: title, item: selectedItem });
		setIsModalOpen(true);
	};

	const searchBarRef = document.getElementById("searchBar");

	return (
		<>
			<nav
				className={`p-2 pb-0.5  ${classHelperFn(styles.base, theme, styles)}`}
			>
				<div id="searchBar" className={`${styles.nav_searchBar}`}>
					<SearchBar
						onFocus={() => setActiveDropDown(true)}
						searchTerm={searchTerm}
						handleOnChange={handleOnChange}
					/>
					<DropDown
						setActiveDropDown={setActiveDropDown}
						activeDropDown={activeDropDown}
						secondaryRef={searchBarRef}
					>
						{Object.keys(resultFromSearch).map((val) => {
							return resultFromSearch[val].length ? (
								<DropDownList
									array={resultFromSearch[val]}
									title={val}
									onClick={(selectedItem: any, title: string) => {
										handleDropDownListClick(selectedItem, title);
									}}
								/>
							) : null;
						})}
					</DropDown>
				</div>
				<div className={`${styles.nav_iconContainer}`}>
					<NavIcon>
						<Icon
							className={styles.nav_icon}
							IconName={theme === themes.Dark ? "SUN" : "MOON"}
							width="1.5rem"
							height="100%"
							onClick={() => clickHandler(ACTION.THEME)}
							fill={theme === themes.Dark ? "#FCC419" : "#aeadad"}
						/>
						<Icon
							IconName="BELL"
							width="1.5rem"
							height="100%"
							fill={"#aeadad"}
							onClick={() => clickHandler(ACTION.NOTIFICATION)}
							className={styles.nav_icon}
						/>
						<Icon
							IconName="USER"
							width="1.5rem"
							height="100%"
							fill={"#aeadad"}
							className={styles.nav_icon}
							onClick={() => clickHandler(ACTION.PROFILE)}
						/>
						<Icon
							IconName="SETTING"
							width="1.5rem"
							height="100%"
							fill={"#aeadad"}
							className={styles.nav_icon}
						/>
					</NavIcon>
				</div>
			</nav>
			{isModalOpen && selectedItem.type === modalType.PRODUCT && (
				<Modal closeModal={setIsModalOpen} title="Product Detail">
					<ProductModal product={selectedItem.item} />
				</Modal>
			)}
			{isModalOpen && selectedItem.type === modalType.USER && (
				<Modal closeModal={setIsModalOpen} title="User Detail">
					<UserModal user={selectedItem.item} />
				</Modal>
			)}
		</>
	);
};

export default NavBar;
