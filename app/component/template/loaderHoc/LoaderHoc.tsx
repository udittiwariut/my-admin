import React, { FC } from "react";
import Loader from "../../atom/loader/Loader";

interface props {
	children: React.ReactNode;
	arrayToCheck: any;
}

const LoaderHoc = ({ children, arrayToCheck }: props) => {
	return (
		<div style={{ height: "100%", width: "100%" }}>
			{arrayToCheck.length ? children : <Loader />}
		</div>
	);
};

export default LoaderHoc;
