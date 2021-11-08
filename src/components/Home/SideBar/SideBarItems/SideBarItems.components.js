import React from "react";
import { Link } from "react-router-dom";
import { Item, Icon, Divider } from "semantic-ui-react";
import "./SideBarItems.css";

export const SideBarItems = () => {
	return (
		<Item>
			<Link to="/">
				<div className="sidebar_items">
					<span>
						<Icon size="large" name="home" />
					</span>
					<span>Home</span>
				</div>
			</Link>
			<Link to="/result?search_query=trending%20videos">
				<div className="sidebar_items">
					<span>
						<Icon size="large" name="fire" />
					</span>
					<span>Trending</span>
				</div>
			</Link>
			<div className="sidebar_items">
				<span>
					<Icon size="large" name="youtube square" />
				</span>
				<span>Subscriptions</span>
			</div>
			<Divider />
			<div className="sidebar_items">
				<span>
					<Icon size="large" name="video play" />
				</span>
				<span>Library</span>
			</div>
			<div className="sidebar_items">
				<span>
					<Icon size="large" name="history" />
				</span>
				<span>History</span>
			</div>
			<Divider />
		</Item>
	);
};
