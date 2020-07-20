import React, { Component } from "react";
import fire from "../config/firebase";
import moment from "moment";
import Search from "../components/search";
import MyAppBar from "./appbar";
class Attendance extends Component {
	constructor(props) {
		super(props);
		this.state = { emails: [] };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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

	handleSubmit(event) {
		event.preventDefault();
		// var emails = this.state.emails.split(";");
		var emails = this.state.emails;
		var ref = fire.database().ref("Users");
		ref.once("value").then((snapshot) => {
			emails.forEach((element) => {
				var email = Object.values(snapshot.val()).filter(
					(user) => user.email == element
				);
				console.log(email[0].id);
				var date = new Date().getDate();
				var month = new Date().getMonth() + 1;
				var year = new Date().getFullYear();
				var dateStr = date + "-" + month + "-" + year;
				var d = moment().utcOffset("+05:30").format("YYYY-MM-DD");
				ref.child(email[0].id).child("absents").push(d);
			});
		});
	}

	render() {
		return (
			<div>
				<MyAppBar />
				<h2>Add the student who is absent today</h2>
				<form onSubmit={this.handleSubmit}>
					<label>Add the student emails who are absent: </label>
					{/* <textarea name='emails' onChange={this.handleInputChange} /> */}
					<Search onSelectEmails={this.handleEmails} />
					<button type='submit'>Choose as absent</button>
				</form>
			</div>
		);
	}
}
export default Attendance;
