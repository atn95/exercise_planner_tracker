export let dataPageStyles = {
	container: {
		display: `flex`,
		flexDirection: window.innerWidth < 600 ? 'column' : 'row',
		justifyContent: `space-between`,
		width: `min(1400px, 90%)`,
		margin: `0 auto`,
	},
	leftPanel: {
		width: window.innerWidth < 600 ? '95%' : '35%',
		border: `2px solid black`,
	},
	rightPanel: {
		width: window.innerWidth < 600 ? `95%` : `60%`,
		border: `2px solid black`,
	},
};
