import React, { useEffect, MouseEvent } from "react";

const useOutSideToClose = (
	menuRef: any,
	setActive: any,
	secondaryRef: any = undefined
) => {
	useEffect(() => {
		const clickHandler = (e: any): any => {
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
