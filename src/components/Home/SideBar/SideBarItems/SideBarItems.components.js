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
			<div>
				<div className="for_you">
					<span className="animation">More From YouTube </span>
				</div>
				<Link to="/result?search_query=songs">
					<div className="sidebar_items">
						<span>
							<Icon size="large" name="music" />
						</span>
						<span>Music</span>
					</div>
				</Link>
				<Link to="/result?search_query=movies">
					<div className="sidebar_items">
						<span>
							<Icon size="large" name="film" />
						</span>
						<span>Movies</span>
					</div>
				</Link>
				<Link to="/result?search_query=india%20news">
					<div className="sidebar_items">
						<span>
							<Icon size="large" name="newspaper" />
						</span>
						<span>News</span>
					</div>
				</Link>
				<Link to="/result?search_query=gaming%20videos">
					<div className="sidebar_items">
						<span>
							<Icon size="large" name="game" />
						</span>
						<span>Gaming</span>
					</div>
				</Link>
				<Link to="/result?search_query=sports">
					<div className="sidebar_items">
						<span>
							<Icon size="large" name="trophy" />
						</span>
						<span>Sports</span>
					</div>
				</Link>
			</div>
		</Item>
	);
};
