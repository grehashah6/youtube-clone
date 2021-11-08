import React from "react";
import { VideoPreview } from "../../Home/Content/VideoGrid/VideoPreview/VideoPreview.components";
import './ResultList.css'

export const ResultList = (props) => {
	const previews = props.videos.map((item) => (
		<VideoPreview
         video={item} key={item.id}
          />
	));

	return <div className="result_list" >{previews}</div>;
};
