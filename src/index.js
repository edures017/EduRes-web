import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, Link, browserHistory } from "react-router";
import NewStd from "./components/newstd";
import Notify from "./components/notify";
import Attendance from "./components/attendance";
import Landing from "./components/landing";
// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

ReactDOM.render(
	<App />,
	// <Router basename={process.env.PUBLIC_URL} history={browserHistory}>
	// 	<Route path='/' component={App} />
	// 	<Route exact path='/newstd' component={NewStd} />
	// 	<Route exact path='/notify' component={Notify} />
	// 	<Route path='/attendance' component={Attendance} />
	// </Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
