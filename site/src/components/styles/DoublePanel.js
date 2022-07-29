export let styles = {
	container: {
		display: `flex`,
		flexDirection: window.innerWidth < 600 ? 'column' : 'row',
		justifyContent: `space-between`,
		width: `min(1400px, 90%)`,
		margin: `0 auto`,
	},
	rightPanel: {
		width: window.innerWidth < 600 ? '95%' : `46%`,
		border: `2px solid black`,
		marginTop: `20px`,
		borderRadius: `10px`,
		backgroundColor: `rgb(240,240,240)`,
	},
	leftPanel: {
		width: window.innerWidth < 600 ? '95%' : `46%`,
		border: `2px solid black`,
		marginTop: `20px`,
		borderRadius: `10px`,
		paddingBottom: `15px`,
		backgroundColor: `rgb(240,240,240)`,
	},
};
