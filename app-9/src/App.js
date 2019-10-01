import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/'>About</Link>
					</li>
					<li>
						<Link to='/'>Users</Link>
					</li>
				</ul>
			</Router>
		);
	}
}

export default App;
