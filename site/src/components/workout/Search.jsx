import React from 'react';

const Search = ({ onSubmit, onChange }) => {
	const styles = {
		form: {
			display: `flex`,
			justifyContent: `space-between`,
			minHeight: `30px`,
		},
		searchInput: {
			width: `70%`,
		},
		searchBtn: {
			width: `25%`,
		},
	};
	return (
		<div>
			<form style={styles.form} onSubmit={onSubmit}>
				<input style={styles.searchInput} type='text' name='search' />
				<button type='submit'>search</button>
			</form>
		</div>
	);
};

export default Search;
