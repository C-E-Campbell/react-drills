import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	async componentDidMount() {
		const data = await axios.get(
			"https://cors-anywhere.herokuapp.com/https://api.sportradar.com/tennis-t2/en/players/rankings.json?api_key=29n49vy68mxscutdge8ykpax"
		);

		this.setState({
			data: data.data.rankings[0].player_rankings[0].player
		});
	}

	render() {
		const { name, nationality } = this.state.data;
		return (
			<div className='App'>
				<div>{name}</div>
				<div>{nationality}</div>
			</div>
		);
	}
}

export default App;
