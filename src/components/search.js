import React, { Component } from "react";
import fire from "../config/firebase";
import Select from "react-select";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stds: [],
			options: [],
		};
		this.getData = this.getData.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	getData() {
		var opts = [];
		var val;
		const ref = fire.database().ref("Users");
		let _this = this;
		ref.once("value").then((snapshot) => {
			val = Object.values(snapshot.val());
			val.map((element) => {
				opts.push({ value: element.email, label: element.name });
			});
			_this.setState({
				options: opts,
			});
		});
	}

	componentDidMount() {
		this.getData();
	}

	handleChange = (event) => {
		// console.log(event);
		var emails = [];
		event.forEach((element) => {
			emails.push(element.value);
		});
		// console.log(emails);
		this.props.onSelectEmails(emails);
		this.setState({ stds: event });
	};

	render() {
		return (
			<div>
				<Select
					options={this.state.options}
					placeholder='Search and Select the students'
					isMulti
					isSearchable
					noOptionsMessage={() => "No more students"}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default Search;
