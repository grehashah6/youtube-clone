import React from "react";
import "./WatchVideo.css";
import Video from "../WatchVideo/Video/Video";
import { withRouter } from "react-router-dom";
import { getParamValue } from "../../utils/uri";

const WatchVideo = (props) => {
	const getVideoId = () => {
		return getParamValue(props.location, "v") || "";
	};

	return (
		<div className="watch_video">
			<Video videoId={getVideoId()} />
		</div>
	);
};

export default withRouter(WatchVideo);
