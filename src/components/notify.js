import React, { Component } from "react";

import axios from "axios";
class Notify extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.sendmsg = this.sendmsg.bind(this);
	}

	sendmsg = () => {
		var registrationToken =
			"fW-w-DpTXjQ:APA91bEQXO429KuR2WIjEH1ie-BkenFUyIpc-DuYSfiiOwzrFgS67NDsOCmjo2-4ZcuEESIUWnwfeihgqE2tkWdhF4zYDYwj2cjOP8nOfWN87P9btCqbHTJJaRJDQ8VZd3X6qIlzH-_j";

		axios.post("http://localhost:9000/notify", {
			msg: {
				notification: {
					title: "$GOOG up 1.43% on the day",
					body:
						"$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.",
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
