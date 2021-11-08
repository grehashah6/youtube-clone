import React from "react";
import { VideoPreview } from "./VideoPreview/VideoPreview.components";
import "./VideoGrid.css";
import { VideoGridHeader } from "./VideoGridHeader/VideoGridHeader";
import { Divider } from "semantic-ui-react";

export const VideoGrid = (props) => {
	
	console.log(props);

	let previews = props.videos.map((video) => (
		<VideoPreview key={video.id} video={video} />
	));
	return (
		<>
			<VideoGridHeader title={props.title}/>
			<div className="video_grid">{previews}</div>
			<Divider />
		</>
	);
};
