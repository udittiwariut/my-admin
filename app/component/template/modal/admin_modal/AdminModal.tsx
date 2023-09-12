import React from "react";
import Avatar from "@/app/component/molecule/avatar/Avatar";
import globalModalStyle from "./../Modal.module.scss";
import style from "./AdminModal.module.scss";
import capitalizeFirst from "@/app/utlis/functions/capatalizeFirst";
import { v4 as uuid } from "uuid";

const AdminModal = ({ admin }: { admin: any }) => {
	const fieldNotToInclude = ["avatar", "privileges"];
	const title = Object.keys(admin!).filter((ele) => {
		if (!fieldNotToInclude.includes(ele)) {
			return ele;
		}
	});

	return (
		<div className={globalModalStyle.modal_base}>
			<div className={globalModalStyle.modal_body}>
				<div className={globalModalStyle.modal_avatar}>
					<Avatar link={admin.avatar}></Avatar>
				</div>
				<div className={style.details}>
					<div className={style.flexLeft}>
						{title.map((detail) => (
							<div className="mt-3 mb-3 text-nowrap text-truncate" key={uuid()}>
								<strong>{capitalizeFirst(detail)}</strong>: {"  "}{" "}
								{admin![detail as keyof typeof admin]}
							</div>
						))}
					</div>
					<div className={`mt-3 mb-3 ${style.flexRight}`}>
						<strong>Privileges:</strong>
						<ul className={`p-0 ${style.list}`}>
							{admin.privileges.map((privilege: string) => (
								<li key={uuid()} className={`mt-2 ${style.listItem}`}>
									{capitalizeFirst(privilege)}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminModal;
