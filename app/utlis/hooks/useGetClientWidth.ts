import React, { useEffect, useState } from "react";

export const breakPoint = {
	xxm: 320,
	xm: 480,
	lmad: 600,
	smd: 700,
	md: 800,
	lg: 1024,
	xl: 1280,
};
const delay = 200;

const useGetClientWidth = (
	timeout: string | number | NodeJS.Timeout | undefined
) => {
	const [clientWidth, setClientWidth] = useState<number>(
		document.body.clientWidth
	);

	const debounce = () => {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			setClientWidth(window.innerWidth);
		}, delay);
	};

	useEffect(() => {
		window.addEventListener("resize", debounce);
	}, []);

	return clientWidth;
};

export default useGetClientWidth;
