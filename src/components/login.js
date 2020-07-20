import React, { Component } from "react";
import fire from "../config/firebase";
import "../style/login.css";

import SignIn from "./signin";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{"Copyright © "}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	login(e) {
		e.preventDefault();
		fire
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password);
	}

	// render() {
	// 	return (
	// 		// <SignIn />
	// 		<form class='login' onSubmit={this.login}>
	// 			<label> Email: </label>
	// 			<input type='text' name='email' onChange={this.handleInputChange} />
	// 			<input
	// 				type='password'
	// 				name='password'
	// 				onChange={this.handleInputChange}
	// 			/>
	// 			<button type='submit'> Submit </button> <br />
	// 		</form>
	// 	);
	// }

	render() {
		const { classes } = this.props;
		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>
					<form className={classes.form} noValidate onSubmit={this.login}>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
							autoFocus
							onChange={this.handleInputChange}
						/>
						<TextField
							variant='outlined'
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
							onChange={this.handleInputChange}
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
						>
							Sign In
						</Button>
					</form>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(Login);
