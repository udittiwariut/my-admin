import React, { useEffect, MouseEvent } from "react";

const useOutSideToClose = (
	menuRef: React.RefObject<HTMLDivElement>,
	setActive: any
) => {
	useEffect(() => {
		const clickHandler = (e: MouseEvent<HTMLDivElement> | TouchEvent): void => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setActive(false);
			}
		};
		document.addEventListener("mousedown", clickHandler);

		return () => {
			document.removeEventListener("mousedown", clickHandler);
		};
	});
};
export default useOutSideToClose;
