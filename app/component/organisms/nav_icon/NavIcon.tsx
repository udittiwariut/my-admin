import React from "react";

import styles from "./NavIcon.module.scss";

const NavIcon = ({ children }: any) => {
	return <div className="d-flex justify-content-around">{children}</div>;
};

export default NavIcon;
