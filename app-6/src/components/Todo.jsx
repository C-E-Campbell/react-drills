import React from "react";
const Todo = ({ todos }) => {
	const tasksList = todos.map((element, i) => {
		return <h4 key={i}>{element}</h4>;
	});
	return <div>{tasksList}</div>;
};

export default Todo;
