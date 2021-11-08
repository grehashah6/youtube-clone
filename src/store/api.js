/* global gapi */
export const getVideos = () => {
	return getVideoByFilter();
};

export const getVideosByCategories = (categoryId) => {
	return getVideoByFilter(categoryId);
};

export const getVideoCategories = () => {
	return gapi.client.youtube.videoCategories.list({
		part: ["snippet"],
		regionCode: "IN",
	});
};

export const searchVideo = (query, nextPageToken, maxResults = 16) => {
	return gapi.client.youtube.search.list({
		part: ["snippet", "id"],
		q: query,
		maxResults: maxResults,
		pageToken: nextPageToken,
		type: "video",
	});
};

const getVideoByFilter = (categoryId = null, maxSize = 16) => {
	return gapi.client.youtube.videos.list({
		part: ["snippet", "statistics", "contentDetails"],
		chart: "mostPopular",
		maxResults: maxSize,
		videoCategoryId: categoryId,
	});
};
