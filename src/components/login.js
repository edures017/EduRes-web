import React, { Component } from "react";
import fire from "../config/firebase";

class Login extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	login(e) {
		e.preventDefault();
		fire
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password);
	}

	render() {
		return (
			<form onSubmit={this.login}>
				<label> Email: </label>
				<input type='text' name='email' onChange={this.handleInputChange} />
				<input
					type='password'
					name='password'
					onChange={this.handleInputChange}
				/>
				<button type='submit'> Submit </button> <br />
			</form>
		);
	}
}

export default Login;
