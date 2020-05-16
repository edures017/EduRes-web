import React, { Component } from "react";
import admin from "../config/admin";
class Notify extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.sendmsg = this.sendmsg.bind(this);
	}

	sendmsg = () => {
		var message = {
			data: {
				score: "850",
				time: "2:45",
			},
			token:
				"fW-w-DpTXjQ:APA91bEQXO429KuR2WIjEH1ie-BkenFUyIpc-DuYSfiiOwzrFgS67NDsOCmjo2-4ZcuEESIUWnwfeihgqE2tkWdhF4zYDYwj2cjOP8nOfWN87P9btCqbHTJJaRJDQ8VZd3X6qIlzH-_j",
		};
		admin
			.messaging()
			.send(message)
			.then((response) => {
				// Response is a message ID string.
				console.log("Successfully sent message:", response);
			})
			.catch((error) => {
				console.log("Error sending message:", error);
			});
	};

	render() {
		return (
			<div>
				<h2>Notify the student</h2>
				<button onClick={this.sendmsg}>Send</button>
			</div>
		);
	}
}

export default Notify;
