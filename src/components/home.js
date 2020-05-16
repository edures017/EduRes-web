import React, { Component } from "react";
import fire from "../config/firebase";
import NewStd from "../components/newstd";
import Notify from "../components/notify";

class Home extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout(e) {
		fire.auth().signOut();
	}

	render() {
		return (
			<div>
				Home<br></br>
				<button onClick={this.logout}>Log Out</button>
				<br />
				<br />
				<NewStd />
				<Notify />
			</div>
		);
	}
}

export default Home;
