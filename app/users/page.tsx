"use client";
import React, { useState, useMemo, useEffect } from "react";
import TableUser from "../component/template/table/Table";
import style from "./page.module.scss";
import Text from "../component/atom/text/Text";
import DropDown from "../component/organisms/drop_down/DropDown";
import IconText from "../component/molecule/iconText/IconText";
import User from "./../../data/User.json";
import PaginationBox from "../component/organisms/pagination_box/PaginationBox";
import Modal from "../component/template/modal/Modal";
import UserModal from "../component/template/modal/user_modal/UserModal";
import USER from "../Types/User/User";

const array = [5, 10, 15, 20, 25];

const UserPage = () => {
	const [paginationValue, setPaginationValue] = useState(5);
	const [pages, setPages] = useState({ currentPage: 1, totalPages: 0 });
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [user, setUser] = useState<USER | null>();

	console.log(user);

	useEffect(() => {
		const totalPage = Math.ceil(User.users.length / paginationValue);
		setPages({
			currentPage:
				pages.currentPage > totalPage ? totalPage : pages.currentPage,
			totalPages: totalPage,
		});
	}, [paginationValue]);

	const filteredUser = useMemo(
		() =>
			User.users.filter(
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
	);
};

export default UserPage;
