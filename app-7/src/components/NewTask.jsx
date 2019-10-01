import React from "react";

const NewTask = ({ onChange, onClick, value }) => {
	return (
		<div>
			<input
				value={value}
				placeholder='Enter a new task '
				onChange={e => {
					onChange(e.target.value);
				}}
			/>
			<button onClick={onClick}>Add Task</button>
		</div>
	);
};

export default NewTask;
