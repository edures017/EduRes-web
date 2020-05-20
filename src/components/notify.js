import React, { Component } from "react";

import axios from "axios";
class Notify extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.sendmsg = this.sendmsg.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	sendmsg = (event) => {
		event.preventDefault();
		var registrationToken =
			"fW-w-DpTXjQ:APA91bEQXO429KuR2WIjEH1ie-BkenFUyIpc-DuYSfiiOwzrFgS67NDsOCmjo2-4ZcuEESIUWnwfeihgqE2tkWdhF4zYDYwj2cjOP8nOfWN87P9btCqbHTJJaRJDQ8VZd3X6qIlzH-_j";
		var in_body = this.state.body;
		var in_title = this.state.title;
		axios.post("http://localhost:9000/notify", {
			msg: {
				notification: {
					title: in_title,
					body: in_body,
				},
				android: {
					ttl: 3600 * 1000,
					notification: {
						icon: "stock_ticker_update",
						color: "#f45342",
					},
				},
				apns: {
					payload: {
						aps: {
							badge: 42,
						},
					},
				},
				token: registrationToken,
			},
		});
		alert("Notification sent");
	};

	render() {
		return (
			<div>
				<h2>Notify the student</h2>
				<form onSubmit={this.sendmsg}>
					<label>Title of the Notification: </label>
					<input type='text' name='title' onChange={this.handleInputChange} />
					<br />
					<label>Body of the Notification: </label>
					<textarea name='body' onChange={this.handleInputChange} />
					<br />
					<button type='submit'>Send</button>
				</form>
			</div>
		);
	}
}

export default Notify;
