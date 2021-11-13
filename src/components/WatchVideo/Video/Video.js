import React from "react";
import "./Video.css";

const BASE_URL = "https://youtube.com/embed/";

const Video = (props) => {
	return (
		<div className="video_container">
			<div className="video">
				<iframe
					className="video_player"
					src={`${BASE_URL}${props.videoId}`}
					frameBorder="0"
					allowFullScreen
					title="video"
				/>
			</div>
		</div>
	);
};

export default Video;
