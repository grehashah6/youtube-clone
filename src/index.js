import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from 'redux-devtools-extension';
import { YoutubeReducer } from "./store/reducer/youtube-reducer";

const store = createStore(
	YoutubeReducer,
	composeWithDevTools(applyMiddleware(Thunk))
);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
