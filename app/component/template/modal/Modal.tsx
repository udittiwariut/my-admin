"use client";
import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";
import useOutSideToClose from "@/app/utlis/hooks/useOutSideToClose";
import style from "./style.module.scss";
import Title from "../../atom/title/Title";
import Button from "../../atom/button/Button";
import Icon from "../../atom/icon/Icon";
import HorizontalDivider from "../../atom/horizontalDivider/HorizontalDivider";

interface props {
	children: React.ReactNode;
	closeModal: Dispatch<SetStateAction<boolean>>;
	title: string;
}

const Modal = ({ children, closeModal, title }: props) => {
	const ref = useRef<Element | null>(null);
	const modalRef = useRef<Element | null>(null);
	const [mounted, setMounted] = useState(false);

	useOutSideToClose(modalRef, closeModal);

	useEffect(() => {
		ref.current = document.getElementById("portal");
		setMounted(true);
	}, []);

	return mounted && ref.current
		? createPortal(
				<div className={style.overlay}>
					<div ref={modalRef} className={style.modal}>
						<div className={style.header}>
							<Title className="title-2 text-secondary fw-bold pb-2 pt-1">
								{title}
							</Title>
							<Button onClick={() => closeModal(false)}>
								<Icon
									className={style.icon}
									IconName="CLOSE"
									height="2rem"
									width="2rem"
								/>
							</Button>
						</div>
						<HorizontalDivider className={style.margin} />
						<div className={style.body}>{children}</div>
					</div>
				</div>,
				ref.current
		  )
		: null;
};

export default Modal;
