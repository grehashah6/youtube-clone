import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { Home } from "./components/Home/Home.components";
import TopNav from "./components/TopNav/TopNav.components";
import { connect } from "react-redux";
import { YoutubeClientLoaded } from "./store/actionCreators/actionCreators";
import { SideBar } from "./components/Home/SideBar/SideBar.components";
import Search from "./components/Search/Search.component";
import WatchVideo from "./components/WatchVideo/WatchVideo";

/* global gapi */
function App(props) {
	useEffect(() => {
		gapi.load("client", () => {
			gapi.client.setApiKey("AIzaSyAnH8lxwSk4OJ_a50sHjv521AyShv9F1ds");

			return gapi.client.load("youtube", "v3", () => {
				//  getVideos();
				props.setYoutubeClientLoaded();
			});
		});
	}, []);

	const showSideBar = () => {
		return props.location.pathname !== "watch";
	};

	return (
		<div className="App">
			<TopNav />
			{showSideBar() ? <SideBar /> : null}
			<Switch>
				<Route path="/result" component={Search} />
				<Route path="/watch" component={WatchVideo} />
				<Route path="/"  component={Home} />
			</Switch>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		setYoutubeClientLoaded: () => {
			dispatch(YoutubeClientLoaded());
		},
	};
};

export default withRouter(connect(null, mapDispatchToProps)(App));
