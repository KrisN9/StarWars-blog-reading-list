import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Poner logo StarWars</a>
			</div>
			<div class="btn-group px-auto" role="group">
				<button type="button" class="btn btn-primary btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
				</button>
				<ul class="dropdown-menu">
					<li><a class="dropdown-item" href="#"></a></li>
				</ul>
			</div>
		</nav>)
	}
