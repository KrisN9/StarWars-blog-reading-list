import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Logo Star Wars</a>
			</div>
			<div className="btn-group px-auto" role="group">
				<button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#"></a></li>
				</ul>
			</div>
		</nav>)
	}
