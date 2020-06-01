import React, { Component } from "react";
import fire from "../config/firebase";
import secondaryApp from "../config/secondary";
class NewStd extends Component {
	constructor(props) {
		super(props);
		this.state = { id: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.uploadData = this.uploadData.bind(this);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		secondaryApp
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then((result) => {
				// See the UserRecord reference doc for the contents of userRecord.
				var uid = result.user.uid;
				this.setState({ id: uid });
				this.uploadData();
			})
			.catch(function (error) {
				console.log("Error fetching user data:", error);
			});
		secondaryApp.auth().signOut();
		alert("Student has been added");
	};

	uploadData = () => {
		var myref = fire.database().ref("Users/" + this.state.id);
		var data = {
			id: this.state.id,
			name: this.state.name,
			address: this.state.address,
			email: this.state.email,
			pno: this.state.pno,
			division: this.state.division,
		};
		myref.set(data);
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h2>Add a new Student</h2>
					<label>Name: </label>
					<input type='text' name='name' onChange={this.handleChange} />
					<br />
					<label>Address: </label>
					<textarea type='text' name='address' onChange={this.handleChange} />
					<br />
					<label>Email: </label>
					<input type='text' name='email' onChange={this.handleChange} />
					<br />
					<label>Password: </label>
					<input type='text' name='password' onChange={this.handleChange} />
					<br />
					<label>Phone Number: </label>
					<input type='text' name='pno' onChange={this.handleChange} />
					<br />
					<label>Division</label>
					<input type='text' name='division' onChange={this.handleChange} />
					<br />
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default NewStd;
