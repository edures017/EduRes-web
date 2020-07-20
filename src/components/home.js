import React, { Component } from "react";
import fire from "../config/firebase";
import NewStd from "../components/newstd";
import Notify from "../components/notify";
import Attendance from "../components/attendance";
import MyDrawer from "../components/drawer";
import MyAppBar from "../components/appbar";
class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{/* Home<br></br>
				<button onClick={this.logout}>Log Out</button>
				<br />
				<br />
				<NewStd />
				<Notify />
				<Attendance /> */}
				{/* <MyDrawer /> */}
				<MyAppBar />
			</div>
		);
	}
}

export default Home;
