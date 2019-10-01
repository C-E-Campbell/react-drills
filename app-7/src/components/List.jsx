import React from "react";
import Todo from "./Todo";
const List = ({ todos }) => {
	const mappedTasks = todos.map((task, i) => {
		return <Todo key={i} task={task} />;
	});
	return <div>{mappedTasks}</div>;
};

export default List;
