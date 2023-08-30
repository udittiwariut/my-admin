"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import { getFireStoreData, COLLECTION } from "@/app/utlis/firebase/fireStore";
import { setIsAdminModalOpen } from "@/app/globalRedux/admin/admin.slice";
import Modal from "../modal/Modal";
import type { RootState } from "@/app/globalRedux/store";
import ADMIN from "@/app/Types/Admin/Admin";
import AdminModal from "../modal/admin_modal/AdminModal";

const AdminProfile = () => {
	const dispatch = useDispatch();
	const [admin, setAdmin] = useState({});

	const { user } = useUser();
	const isAdminModalOpen = useSelector(
		(state: RootState) => state.Admin.isAdminModalOpen
	);

	const closeModal: any = (arg: boolean) => {
		dispatch(setIsAdminModalOpen(arg));
	};
	useEffect(() => {
		const getFireBaseData = async () => {
			const fireBaseAdmin = await getFireStoreData(COLLECTION.ADMIN, [
				"email",
				"==",
				user?.email!,
			]);
			const [admin] = fireBaseAdmin;

			const unSortedAdmin = { ...admin, ...user };

			const sortedAdmin = {
				avatar: unSortedAdmin.avatar,
				sid: unSortedAdmin.sid,
				email: unSortedAdmin.email,
				userName: unSortedAdmin.username,
				joinedAt: unSortedAdmin.updated_at,
				privileges: unSortedAdmin.privileges,
			};

			setAdmin(sortedAdmin);
		};
		getFireBaseData();
	}, []);

	return (
		<>
			{isAdminModalOpen && (
				<Modal title="Admin Detail" closeModal={closeModal}>
					<AdminModal admin={admin} />
				</Modal>
			)}
		</>
	);
};

export default AdminProfile;
