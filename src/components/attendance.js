import React, { Component } from "react";
import fire from "../config/firebase";
import moment from "moment";

class Attendance extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		var emails = this.state.emails.split(";");
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
				<h2>Add the student who is absent</h2>
				<form onSubmit={this.handleSubmit}>
					<label>Add the student emails who are absent: </label>
					<textarea name='emails' onChange={this.handleInputChange} />
					<button type='submit'>Choose as absent</button>
				</form>
			</div>
		);
	}
}
export default Attendance;
