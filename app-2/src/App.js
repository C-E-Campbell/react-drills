import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			newArray: ["red", "blue", "orange", "purple"]
		};
	}
	render() {
		const mappedArray = this.state.newArray.map(element => {
			return <h3>{element}</h3>;
		});
		return <div className='App'>{mappedArray}</div>;
	}
}

export default App;
