import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getParamValue } from "../../utils/uri";
import { connect } from "react-redux";
import { SearchVideos } from "../../store/actionCreators/actionCreators";
import { ResultList } from "./ResultList/ResultList.component";
import { Item } from "semantic-ui-react";

const Search = (props) => {
	console.log(JSON.stringify(props.searchResults));

	const videos =
    props.searchResults.map((item) => ({ ...item})) || [] ;

	const userQuery = getParamValue(props.location, "search_query");

	useEffect(() => {
		if (props.youtubeClientLoaded && userQuery) {
			props.searchVideos(userQuery, null);
		}
	}, [props.youtubeClientLoaded, userQuery]);

	console.log(props.location);
	return <ResultList videos={videos} />;
};

const mapStateToProps = (state) => {
	return {
		searchResults: state.searchResults,
		youtubeClientLoaded: state.isYoutubeClientLoaded,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		searchVideos: (query, nextPageToken) =>
			dispatch(SearchVideos(query, nextPageToken)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
