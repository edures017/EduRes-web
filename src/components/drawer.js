import React, { Component, Fragment } from "react";
import { Drawer } from "@material-ui/core";

import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import NewStd from "./newstd";

const useStyles = (theme) => ({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: "white",
	},
});

class MyDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			left: false,
		};
	}
	render() {
		const { classes } = this.props;

		const toggleDrawer = (anchor, open) => (event) => {
			if (
				event.type === "keydown" &&
				(event.key === "Tab" || event.key === "Shift")
			) {
				return;
			}

			this.setState({ ...this.state, [anchor]: open });
		};

		const list = (anchor) => (
			<div
				className={clsx(this.list, {
					[this.fullList]: anchor === "top" || anchor === "bottom",
				})}
				role='presentation'
				onClick={toggleDrawer(anchor, false)}
				onKeyDown={toggleDrawer(anchor, false)}
			>
				<List>
					<ListItem
						button
						component='a'
						href='/newstd'
						key={"Add a new Student"}
					>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"Add a new Student"} />
					</ListItem>

					<ListItem button component='a' href='/notify' key={"Notify Students"}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"Notify Students"} />
					</ListItem>

					<ListItem
						button
						component='a'
						href='/attendance'
						key={"Change Attendance"}
					>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"Change Attendance"} />
					</ListItem>
					{/* <ListItem button key={"Logout"} onClick={this.logout}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={"Logout"} />
					</ListItem> */}
				</List>
			</div>
		);

		return (
			<div>
				<React.Fragment key={"left"}>
					<IconButton
						edge='start'
						className={classes.menuButton}
						aria-label='menu'
						onClick={toggleDrawer("left", true)}
					>
						{
							// <IconButton
							// 	edge='start'
							// 	className={classes.menuButton}
							// 	aria-label='menu'
							// >
							<MenuIcon />
							// </IconButton>
						}
					</IconButton>
					<Drawer
						anchor={"left"}
						open={this.state["left"]}
						onClose={toggleDrawer("left", false)}
					>
						{list("left")}
					</Drawer>
				</React.Fragment>
			</div>
		);
	}
}

export default withStyles(useStyles, { withTheme: true })(MyDrawer);
