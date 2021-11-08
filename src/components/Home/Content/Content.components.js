import React, { useState, useEffect } from "react";
import { VideoGrid } from "./VideoGrid/VideoGrid.components";
import "./content.css";
import { InfiniteScroll } from "../../InfiniteScroll/InfiniteScroll";
import { connect } from "react-redux";
import { LoadPopularVideos } from "../../../store/actionCreators/actionCreators";
import { GetCategories } from "../../../store/actionCreators/actionCreators";
import { GetVideosByCategories } from "../../../store/actionCreators/actionCreators";

const Content = (props) => {
	console.log(JSON.stringify(props.videos));
	// console.log(props.videosByCategories);
	const grids = <VideoGrid videos={props.videos} title="Recommended" />;

	const gridByCategory = Object.keys(props.videoByCategories).map((key) => (
		<VideoGrid videos={props.videoByCategories[key]} title={key} />
	));

	const [categoryIndex, setCategoryIndex] = useState(0);

	if (categoryIndex == 0 && props.categories.length > 0) {
		props.LoadVideosByCategories([props.categories[categoryIndex]]);
		setCategoryIndex((currentIndex) => (currentIndex += 1));
	}

	const onCallBack = () => {
		if (props.categories.length > 0) {
			// console.log(categoryIndex)

			let categoriesToFetch = props.categories.slice(
				categoryIndex,
				categoryIndex + 2
			);
			props.LoadVideosByCategories(categoriesToFetch);
			setCategoryIndex((currentIndex) => (currentIndex += 2));
		}
	};

	useEffect(() => {
		// console.log(props.isYoutubeClientLoaded);

		if (props.isYoutubeClientLoaded) {
			props.LoadPopularVideos();
			props.LoadCategories();
		}
	}, [props.isYoutubeClientLoaded]);

	return (
		<InfiniteScroll callBack={onCallBack}>
			<div className="video_content">
				<div className="video_content_container">
					{grids}
					{gridByCategory}
				</div>
			</div>
		</InfiniteScroll>
	);
};

const mapStateToProps = (state) => {
	return {
		isYoutubeClientLoaded: state.isYoutubeClientLoaded,
		videos: state.videos,
		categories: state.categories,
		videoByCategories: state.videoByCategories,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		LoadPopularVideos: () => dispatch(LoadPopularVideos()),
		LoadCategories: () => dispatch(GetCategories()),
		LoadVideosByCategories: (categories) =>
			dispatch(GetVideosByCategories(categories)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
