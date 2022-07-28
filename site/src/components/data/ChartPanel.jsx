import LineChart from './LineChart';
const ChartPanel = ({ chartData }) => {
	return (
		<div style={{ width: `90%` }}>
			<LineChart chartData={chartData}></LineChart>
		</div>
	);
};

export default ChartPanel;
