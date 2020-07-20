import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Link } from "react-router-dom";
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

console.log(process.env.PUBLIC_URL);
ReactDOM.render(
	// <App />,
	<BrowserRouter>
		<Route exact path='/' component={App} />
		<Route exact path={process.env.PUBLIC_URL + "/notify"} component={NewStd} />
		<Route exact path={process.env.PUBLIC_URL + "/notify"} component={Notify} />
		<Route path={process.env.PUBLIC_URL + "/notify"} component={Attendance} />
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
