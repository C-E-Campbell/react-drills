import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.filterArray = this.filterArray.bind(this);
		this.state = {
			testArray: ["red", "blue", "green", "purple", "yellow"],
			filteredArray: []
		};
	}

	filterArray(e) {
		const filtered = this.state.testArray.filter(element => {
			return element.includes(e);
		});
		this.setState({ filteredArray: filtered });
	}

	render() {
		const displayFiltered = this.state.filteredArray.map((element, i) => {
			return <h4 key={i}>{element}</h4>;
		});

		const unfiltered = this.state.testArray.map((element, i) => {
			return <h4 key={i}>{element}</h4>;
		});

		return (
			<div className='App'>
				<input
					onChange={e => {
						this.filterArray(e.target.value);
					}}
				/>
				<div>
					{this.state.filteredArray.length > 0 ? displayFiltered : unfiltered}
				</div>
			</div>
		);
	}
}

export default App;
