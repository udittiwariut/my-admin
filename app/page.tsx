import Stats from "./component/template/stats/Stats";
import ProgressCard from "./component/template/progress/Progress";
import Graph from "./component/template/graph/Graph";

export default function Home() {
	return (
		<>
			<Stats />
			<ProgressCard />
			<Graph />
		</>
	);
}
