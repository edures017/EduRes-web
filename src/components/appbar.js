import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MyDrawer from "../components/drawer";
import fire from "../config/firebase";

import { withRouter, Redirect } from "react-router-dom";

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
});
class MyAppBar extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
		this.state = {
			redirect: false,
		};
	}
	logout(e) {
		this.setState({ redirect: true });
		fire.auth().signOut();
	}
	render() {
		const { classes } = this.props;
		if (this.state.redirect) {
			return <Redirect to='/' />;
		} else {
			return (
				<div className={classes.root}>
					<AppBar position='static'>
						<Toolbar>
							<MyDrawer />
							<Typography variant='h6' className={classes.title}>
								EduRes
							</Typography>
							<Button onClick={this.logout} color='inherit'>
								Logout
							</Button>
						</Toolbar>
					</AppBar>
				</div>
			);
		}
	}
}
export default withRouter(withStyles(useStyles, { withTheme: true })(MyAppBar));
