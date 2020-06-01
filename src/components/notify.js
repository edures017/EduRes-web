import React, { Component } from "react";
import fire from "../config/firebase";
import axios from "axios";
class Notify extends Component {
	constructor(props) {
		super(props);
		this.state = { tokens: [] };
		this.sendmsg = this.sendmsg.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.getEmails = this.getEmails.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	getEmails = () => {
		var emails = this.state.emails.trim().split(";");
		// console.log(emails);
		var result = [];
		var ref = fire.database().ref("Users");
		ref.once("value").then((snapshot) => {
			emails.forEach((element) => {
				var email = Object.values(snapshot.val()).filter(
					(user) => user.email == element
				);
				if (email[0] != null) {
					var toke = this.state.tokens;
					result.push(email[0].token);
					var registrationToken = [
						// "dsShuJSPgNA:APA91bEGx4JBvksAkvO0MlPcXj7sYLycgDJXAZyEcb2MpYKXjjrCKl0WavndrCUGLNM-Kj5ySUzG6cGvbhk6umyUQ0nEwT7n8Jltb3fmBRdm7Awkhc-ZdQ-8xAcpIuFua0fwA9GKFV7A",
						email[0].token,
					];
					axios.post("http://localhost:9000/notify", {
						tokens: registrationToken,
						title: this.state.title,
						body: this.state.body,
					});
				}
			});
		});
	};

	sendmsg = (event) => {
		event.preventDefault();
		this.getEmails();
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
					<label>List of student emails: </label>
					<textarea name='emails' onChange={this.handleInputChange} />
					<button type='submit'>Send</button>
				</form>
			</div>
		);
	}
}

export default Notify;
