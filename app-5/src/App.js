import React, { Component } from "react";
import Image from "./components/Image";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Image source='https://images.pexels.com/photos/1875480/pexels-photo-1875480.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' />
			</div>
		);
	}
}

export default App;
