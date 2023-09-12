"use client";
import Stats from "./component/template/stats/Stats";
import ProgressCard from "./component/template/progress/Progress";
import Graph from "./component/template/graph/Graph";
import style from "./pages.module.scss";
import Table from "./component/template/table/TableHomePage";
import Text from "./component/atom/text/Text";
import { useSelector } from "react-redux";
import { RootState } from "./globalRedux/store";
import classHelperFn from "./utlis/functions/themeClass";
import useGetClientWidth from "./utlis/hooks/useGetClientWidth";

export default function Home() {
	const theme = useSelector((state: RootState) => state.theme.theme);

	return (
		<div className={classHelperFn(style.base, theme, style)}>
			<Stats />
			<div className={style.homePageLayout}>
				<div className={style.container}>
					<div className={style.progress} id="ProgressCard">
						<ProgressCard />
					</div>
					<div className={style.graph}>
						<Graph />
					</div>
				</div>
				<div className={style.table}>
					<Text className="text-secondary p-3">Latest Transaction</Text>
					<Table />
				</div>
			</div>
		</div>
	);
}
