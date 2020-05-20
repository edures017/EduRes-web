import React, { Component } from "react";

class Attendance extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<h2>Add the student who is absent</h2>
				<form>
					<label>Add the student emails who are absent: </label>
				</form>
			</div>
		);
	}
}
export default Attendance;
