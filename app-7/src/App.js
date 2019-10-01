import React, { Component } from "react";
import NewTask from "./components/NewTask";
import List from "./components/List";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.updateTasksArray = this.updateTasksArray.bind(this);
		this.state = {
			tasksList: ["Do HomeWork", "Go to tacobell"],
			newTasks: ""
		};
	}

	updateTasksArray() {
		this.setState({
			tasksList: [...this.state.tasksList, this.state.newTasks],
			newTasks: ""
		});
	}

	updateNewTasks(e) {
		this.setState({ newTasks: e });
	}

	render() {
		return (
			<div className='App'>
				<NewTask
					value={this.state.newTasks}
					tasksList={this.state.tasksList}
					onChange={val => {
						this.updateNewTasks(val);
					}}
					onClick={this.updateTasksArray}
				/>
				<List todos={this.state.tasksList} />
			</div>
		);
	}
}

export default App;
