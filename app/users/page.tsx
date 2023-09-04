"use client";
import React, { useState, useMemo, useEffect } from "react";
import TableUser from "../component/template/table/Table";
import style from "./page.module.scss";
import Text from "../component/atom/text/Text";
import DropDown from "../component/organisms/drop_down/DropDown";
import IconText from "../component/molecule/iconText/IconText";
import PaginationBox from "../component/organisms/pagination_box/PaginationBox";
import Modal from "../component/template/modal/Modal";
import UserModal from "../component/template/modal/user_modal/UserModal";
import LoaderHoc from "../component/template/loaderHoc/LoaderHoc";
import USER from "../Types/User/User";
import Button from "../component/atom/button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../globalRedux/store";

const optionArray = [5, 10, 15, 20, 25];

const UserPage = () => {
	const users: USER[] = useSelector((state: RootState) => state.user.user);

	const [paginationValue, setPaginationValue] = useState(5);
	const [pages, setPages] = useState({ currentPage: 1, totalPages: 0 });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [user, setUser] = useState<USER | null>();
	const [activeDropDown, setActiveDropDown] = useState(false);

	useEffect(() => {
		const totalPage = Math.ceil(users.length / paginationValue);
		if (totalPage) {
			setPages({
				currentPage:
					pages.currentPage > totalPage ? totalPage : pages.currentPage,
				totalPages: totalPage,
			});
		}
	}, [paginationValue, users.length]);

	const filteredUser = useMemo(
		() =>
			users.filter(
				(_, i) =>
					i >= paginationValue * (pages.currentPage - 1) &&
					i < paginationValue * pages.currentPage
			),
		[users.length, paginationValue, pages.currentPage]
	);

	const onOptClick = (e: any) =>
		setPaginationValue(e.target.childNodes[0].data);

	const dropDownBtnRef = document.getElementById("dropDownBtnUser");

	return (
		<LoaderHoc arrayToCheck={users}>
			{users.length && (
				<>
					<div className={style.tableBase}>
						<div className={style.header}>
							<Text className="text-secondary p-3">All Users</Text>
							<div>
								<div id="dropDownBtnUser">
									<Button
										onClick={() => setActiveDropDown(!activeDropDown)}
										classNames={style.buttonStyleBaseDropDownU}
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
										<div
											onClick={onOptClick}
											className={style.dropDownMenuItem}
										>
											{ele}
										</div>
									))}
								</DropDown>
							</div>
						</div>

						<TableUser
							tableContent={filteredUser}
							sNo={paginationValue * (pages.currentPage - 1)}
							setIsModalOpen={setIsModalOpen}
							isModalOpen={isModalOpen}
							fieldNotToInclude={["img"]}
							setItem={setUser}
						/>

						<div className={style.footer}>
							<PaginationBox pages={pages} setPages={setPages} />
						</div>
					</div>
					{isModalOpen && (
						<Modal closeModal={setIsModalOpen} title="User Detail">
							<UserModal user={user} />
						</Modal>
					)}
				</>
			)}
		</LoaderHoc>
	);
};

export default UserPage;

// {  (

// </>
// ) : (
// <Loader />
// );
