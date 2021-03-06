import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Link } from "react-router-dom";
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
	// <App />,
	<HashRouter>
		<Route exact path='/' component={App} />
		<Route exact path='/newstd' component={NewStd} />
		<Route exact path='/notify' component={Notify} />
		<Route path='/attendance' component={Attendance} />
	</HashRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
