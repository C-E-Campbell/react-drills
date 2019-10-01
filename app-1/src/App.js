import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			text: ""
		};
	}
	render() {
		return (
			<div className='App'>
				<input
					onChange={e => {
						this.setState({ text: e.target.value });
					}}
				/>
				<div>{this.state.text}</div>
			</div>
		);
	}
}

export default App;
