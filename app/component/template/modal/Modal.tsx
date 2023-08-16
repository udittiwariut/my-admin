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

interface props {
	children: React.ReactNode;
	closeModal: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, closeModal }: props) => {
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
						{children}
					</div>
				</div>,
				ref.current
		  )
		: null;
};

export default Modal;
