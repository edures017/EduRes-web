import React, { Component } from "react";
import fire from "../config/firebase";
import Login from "../components/login";
import Home from "../components/home";

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
	}

	componentDidMount() {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user: user });
			} else {
				this.setState({ user: null });
			}
		});
	}

	render() {
		if (!this.state.user) {
			return <Login />;
		} else {
			return <Home />;
		}
	}
}

export default Landing;
