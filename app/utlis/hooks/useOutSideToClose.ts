import React, { useEffect, MouseEvent } from "react";

const useOutSideToClose = (
	menuRef: React.RefObject<HTMLDivElement> | nu,
	setActive: any,
	secondaryRef = undefined
) => {
	useEffect(() => {
		const clickHandler = (e: MouseEvent<HTMLDivElement> | TouchEvent): void => {
			if (secondaryRef) {
				if (
					menuRef.current &&
					!menuRef.current.contains(e.target) &&
					!secondaryRef.contains(e.target)
				) {
					setActive(false);
				}
				return;
			}

			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setActive(false);
			}
		};
		document.addEventListener("mousedown", clickHandler);

		return () => {
			document.removeEventListener("mousedown", clickHandler);
		};
	}, [secondaryRef]);
};
export default useOutSideToClose;
