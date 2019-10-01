import React, { Component } from "react";
import Login from "./components/Login";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			user: "",
			pass: ""
		};
	}

	render() {
		return (
			<div className='App'>
				<Login
					placeholder1='username'
					placeholder2='password'
					onUserChange={val => {
						this.setState({ user: val });
					}}
					onPassChange={val => {
						this.setState({ pass: val });
					}}
					onClick={() => {
						alert(
							`User ${this.state.user} has logged in with ${this.state.pass}`
						);
					}}
				/>
			</div>
		);
	}
}

export default App;
