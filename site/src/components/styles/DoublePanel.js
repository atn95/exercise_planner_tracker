export let styles = {
	container: {
		display: `flex`,
		flexDirection: window.innerWidth < 600 ? 'column' : 'row',
		width: `min(1400px, 90%)`,
		margin: `0 auto`,
	},
	rightPanel: {
		width: window.innerWidth < 600 ? '95%' : `49%`,
		border: `2px solid black`,
		marginTop: `20px`,
		borderRadius: `10px`,
	},
	leftPanel: {
		width: window.innerWidth < 600 ? '95%' : `49%`,
		border: `2px solid black`,
		marginTop: `20px`,
		borderRadius: `10px`,
		paddingBottom: `15px`,
	},
};
