import React, { Component } from "react";
import fire from "../config/firebase";
import axios from "axios";
import Search from "../components/search";
import MyAppBar from "./appbar";
class Notify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emails: [],
		};
		this.sendmsg = this.sendmsg.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.getEmails = this.getEmails.bind(this);
		this.handleEmails = this.handleEmails.bind(this);
	}

	handleEmails = (emailsValue) => {
		this.setState({
			emails: emailsValue,
		});
	};

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	getEmails = () => {
		// var emails = this.state.emails.trim().split(";");
		// console.log(emails);
		var emails = this.state.emails;
		console.log(emails);
		var tokens = [];
		var ref = fire.database().ref("Users");
		ref.once("value").then((snapshot) => {
			emails.forEach((element) => {
				var email = Object.values(snapshot.val()).filter(
					(user) => user.email == element
				);
				if (email[0] != null) {
					tokens.push(email[0].token);
					var uid = email[0].id;
					ref.child(uid).child("Alerts").push({
						title: this.state.title,
						body: this.state.body,
					});
					// axios.post("http://localhost:9000/notify", {
					// 	tokens: registrationToken,
					// 	title: this.state.title,
					// 	body: this.state.body,
					// });
				}
			});
			fetch("https://fcm.googleapis.com/fcm/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"key=AAAAyfsVL0g:APA91bFEP-_nKJHmhgb8fWNkif4Wggr3tX6W4etRjKno53WfofDfGJTtnIx1qPWjnhk1TJjg4rYGM45QUdIolqfUD-UOEvZz000477X33Y0lwncCA977e2juRCBS8kwtd43epioBiZdF",
				},
				body: JSON.stringify({
					notification: {
						body: this.state.body,
						title: this.state.title,
					},
					data: { text: "data here" },
					registration_ids: tokens,
				}),
			}).then(alert("Notification Sent"));
		});
	};

	sendmsg = (event) => {
		event.preventDefault();
		this.getEmails();
	};

	render() {
		return (
			<div>
				<MyAppBar />
				<h2>Notify the student</h2>
				<form onSubmit={this.sendmsg}>
					<label>Title of the Notification: </label>
					<input type='text' name='title' onChange={this.handleInputChange} />
					<br />
					<label>Body of the Notification: </label>
					<textarea name='body' onChange={this.handleInputChange} />
					<br />
					{/* <label>List of student emails: </label>
					<textarea name='emails' onChange={this.handleInputChange} /> */}
					<Search onSelectEmails={this.handleEmails} />
					<button type='submit'>Send</button>
				</form>
			</div>
		);
	}
}

export default Notify;
