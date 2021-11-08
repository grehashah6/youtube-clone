import { Load_Categories, Load_Popular_Videos, Load_Video_By_Categories, Search_Videos, Youtube_Client_Loaded } from "../actionTypes";

let initialState = {
	isYoutubeClientLoaded: false,
	videos: [],
	video: {},
	categories : [],
	videoByCategories : {},
	searchResults : [],
};

export const YoutubeReducer = (currentState = initialState, action) => {
	if (action.type === Youtube_Client_Loaded) {
		let state = { ...currentState };
		state.isYoutubeClientLoaded = true;
		return state;
	} else if (action.type === Load_Popular_Videos) {
		let state = { ...currentState };
		state.videos = action.payload;
		return state;
	}else if (action.type === Load_Video_By_Categories) {
		let state = { ...currentState };
		state.videoByCategories ={...state.videoByCategories, ...action.payload};
		return state;
	}else if (action.type === Load_Categories) {
		let state = { ...currentState };
		state.categories = action.payload;
		return state;
	}else if (action.type === Search_Videos) {
		let state = { ...currentState };
		state.searchResults = action.payload;
		return state;
	}
	return currentState;
};
