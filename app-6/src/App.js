import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.addTask = this.addTask.bind(this);
		this.state = {
			tasks: [],
			task: ""
		};
	}

	addTask(task) {
		const newTasks = [...this.state.tasks, task];
		this.setState({ tasks: newTasks });
	}
	render() {
		return (
			<div className='App'>
				<h4>My To-Do List</h4>
				<input
					placeholder='Enter a task'
					onChange={e => {
						this.setState({ task: e.target.value });
					}}
				/>
				<button
					onClick={() => {
						this.addTask(this.state.task);
					}}
				>
					Add Task
				</button>
				<Todo todos={this.state.tasks} />
			</div>
		);
	}
}

export default App;
