import React, { useState } from "react";
import { Form, Icon, Item, Menu, Input } from "semantic-ui-react";
import { encode } from "punycode";
import Search from "../Search/Search.component";
import { Link, withRouter } from "react-router-dom";
import { getParamValue } from "../../utils/uri";
import "./TopNav.css";
import FunctionContext from "./FunctionContext";

export const params = {
	search_query: String,
};

export const ThemeContext = React.createContext();

const TopNav = (props) => {
	const [searchInputState, setSearchInputState] = useState(
		getParamValue(props.location, "search_query") || ""
	);

	const onSearchChange = (event) => {
		let value = event.currentTarget.value;
		setSearchInputState(() => value);
	};

	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	const onSubmit = (event) => {
		const encodeUri = encodeURI(searchInputState);
		props.history.push(`/result?search_query=${encodeUri}`);
	};

	return (
		<Menu borderless fixed="top" className="top_nav">
			<Link to="/">
				<Item>
					<span>
						<Icon name="youtube" size="big" />{" "}
					</span>
					<span>YouTube</span>
				</Item>
			</Link>
			<Menu.Menu className="top_nav_container">
				<Item className="search_input">
					<Form onSubmit={onSubmit}>
						<Form.Field>
							<Input
								placeholder="Search"
								value={searchInputState}
								action={{ icon: "search" }}
								onChange={onSearchChange}
							/>
						</Form.Field>
					</Form>
				</Item>
			</Menu.Menu>
			<Menu.Menu>
				<Item>
					<ThemeContext.Provider value={darkTheme}>
						<button onClick={toggleTheme}>Change Theme </button>
						<FunctionContext />
					</ThemeContext.Provider>
				</Item>

				<Item>
					<Icon className="menu_icon" name="grid layout" size="large" />{" "}
				</Item>
				<Item>
					<Icon className="menu_icon" name="bell" size="large" />{" "}
				</Item>
				<Item>
					<Icon className="menu_icon" name="ellipsis vertical" size="large" />{" "}
				</Item>
			</Menu.Menu>
		</Menu>
	);
};

export default withRouter(TopNav);
