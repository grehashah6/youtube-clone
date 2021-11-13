import React, { useContext } from "react";
import App from "../../App";
import ContentComponents from "../Home/Content/Content.components";
import { Home } from "../Home/Home.components";
import { ThemeContext } from "./TopNav.components";
import Content from "../Home/Content/Content.components";

export default function FunctionContext() {
	const darkTheme = useContext(ThemeContext);
	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		// margin : '200rem'
		//  marginright : darkTheme ? '50rem' : '50rem'
	};
	return (
		<div style={themeStyles}>
			{/* <Home /> */}
		</div>
	);
}
