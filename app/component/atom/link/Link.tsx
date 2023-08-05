import Link from "next/link";
import classStringToArray from "./../../../utlis/functions/class";
import styles from "./Link.module.scss";

interface props {
	classNames?: string;
	children: React.ReactNode;
	href: string;
}

const Route = ({ classNames, children, href }: props) => {
	return (
		<Link
			href={href}
			className={`${styles.base} ${classStringToArray(classNames!, styles)}`}
		>
			{children}
		</Link>
	);
};

export default Route;
