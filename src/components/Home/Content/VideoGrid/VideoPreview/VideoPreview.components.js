import React from "react";
import { Image } from "semantic-ui-react";
import "./VideoPreview.css";
import { formatShortString } from "../../../../../utils/number";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { formatTimeString } from "../../../../../utils/timeFormat";
import { withRouter } from "react-router";

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo();

export const VideoPreview = withRouter((props) => {
	// console.log(props.video);
	return (
		<div className="video_card"  onClick={() => props.history.push(`/watch?v=${props.video.id}`)}>
			<div className="video_preview">
				<div
					className="video_image"
					
				>
					
					<Image src={props.video.snippet.thumbnails.medium.url} />
					<div className="video_time_seen">
						<span>
							{!props.video.contentDetails
								? null
								: formatTimeString(props.video.contentDetails.duration)}
						</span>
					</div>
				</div>

				<div className="video_info">
					<div className="video_title">{props.video.snippet.title}</div>

					<div className="video_basic_info">
						<div className="video_channel">
							{props.video.snippet.channelTitle}{" "}
						</div>
						<div className="video_views">
							{!props.video.statistics
								? null
								: `${formatShortString(
										props.video.statistics.viewCount
								  )} views -
						${timeAgo.format(new Date(props.video.snippet.publishedAt))}`}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
