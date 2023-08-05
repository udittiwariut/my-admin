import Stats from "./component/template/stats/Stats";
import ProgressCard from "./component/template/progress/Progress";
import Graph from "./component/template/graph/Graph";
import style from "./pages.module.scss";
import Title from "./component/atom/title/Title";
import Table from "./component/template/table/TableHomePage";

export default function Home() {
	return (
		<>
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
					<Table />
				</div>
			</div>
		</>
	);
}
