import {
	getVideos,
	getVideoCategories,
	getVideosByCategories,
	searchVideo,
} from "../api";
import {
	Load_Popular_Videos,
	Youtube_Client_Loaded,
	Load_Categories,
	Load_Video_By_Categories,
	Search_Videos,
} from "../actionTypes";

export const YoutubeClientLoaded = () => {
	return (dispatch) => {
		dispatch({
			type: Youtube_Client_Loaded,
		});
	};
};

export const LoadPopularVideos = () => {
	return (dispatch) => {
		getVideos().then((data) => {
			dispatch({
				type: Load_Popular_Videos,
				payload: data.result.items,
			});
		});
	};
};

export const GetCategories = () => {
	return (dispatch) => {
		getVideoCategories().then((data) => {
			// console.log(data)
			dispatch({
				type: Load_Categories,
				payload: data.result.items?.filter((item) => item.snippet.assignable),
			});
		});
	};
};

export const GetVideosByCategories = (videoCategories) => {
	return (dispatch) => {
		let promises = [];

		var asyncFunc = new Promise((resolve, reject) => {
			videoCategories.forEach((item, index, array) => {
				// promises.push( );
				getVideosByCategories(item.id).then((data) => {
					promises.push(data);
					if (index === array.length - 1) {
						resolve(promises);
					}
				});
			});
		});

		asyncFunc.then((data) => {
			let result = {};
			data.forEach((item, index) => {
				result[videoCategories[index].snippet.title] = item.result.items;
			});
			dispatch({
				type: Load_Video_By_Categories,
				payload: result,
			});
		});
	};
};

export const SearchVideos = (query, nextPageToken) => {
	return (dispatch) => {
		searchVideo(query, nextPageToken).then((data) => {
			
			dispatch({
				type: Search_Videos,
				payload: data.result.items,
			});
		});
	};
};

