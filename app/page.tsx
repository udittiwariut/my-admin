import { useState } from "react";
import Stats from "./component/template/stats/Stats";
import ProgressCard from "./component/template/progress/Progress";
import Graph from "./component/template/graph/Graph";
import style from "./pages.module.scss";
import Title from "./component/atom/title/Title";
import Table from "./component/template/table/TableHomePage";
import Text from "./component/atom/text/Text";
import useGetLatestTransaction from "./utlis/hooks/useGetLatestTransation";

export default function Home() {
	useGetLatestTransaction();
	return (
		<div className={style.base}>
			<Stats />
			<div className={style.homePageLayout}>
				<div className={style.container}>
					<div className={style.progress}>
						<ProgressCard />
					</div>
					<div className={style.graph}>
						<Title className="title-2 text-secondary px-5">
							Sale in last six month
						</Title>
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
