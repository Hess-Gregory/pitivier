import React from "react";
import logo from '../img/logo.png';
import logo_black from '../img/logo-black.png';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      	<div class="preloader-area">
		<div class="sk-circle">
			<div class="sk-circle1 sk-child"></div>
			<div class="sk-circle2 sk-child"></div>
			<div class="sk-circle3 sk-child"></div>
			<div class="sk-circle4 sk-child"></div>
			<div class="sk-circle5 sk-child"></div>
			<div class="sk-circle6 sk-child"></div>
			<div class="sk-circle7 sk-child"></div>
			<div class="sk-circle8 sk-child"></div>
			<div class="sk-circle9 sk-child"></div>
			<div class="sk-circle10 sk-child"></div>
			<div class="sk-circle11 sk-child"></div>
			<div class="sk-circle12 sk-child"></div>
		</div>
		<div class="loader-section section-left"></div>
		<div class="loader-section section-right"></div>
	</div>

			<div class="navbar-area">
				<div class="vegan-responsive-nav">
					<div class="container">
						<div class="vegan-responsive-menu">
							<div class="logo">
								<Link to="/">
									<img
										class="white-logo"
										src={logo}
										alt="logo"
									/>
									<img
										class="black-logo"
										src={logo_black}
										alt="logo"
									/>    
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div class="vegan-nav">
					<div class="container">
						<nav class="navbar navbar-expand-md navbar-light">
							<Link class="navbar-brand" to="/">
							<img
								class="white-logo"
								src={logo}
								alt="logo"
								/>
										<img
								class="black-logo"
								src={logo_black}
								alt="logo"
								/>    
							</Link>
							<div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
								<ul class="navbar-nav">
									<li
										class={`nav-item  ${
										props.location.pathname === "/" ? "active" : ""
										}`}
									>
										<Link class="nav-link" to="/">
										Home
										</Link>
									</li>
									<li
										class={`nav-item  ${
										props.location.pathname === "/about" ? "active" : ""
										}`}
									>
										<Link class="nav-link" to="/about">
										About
										</Link>
									</li>

									<li class="nav-item">	<a href={'/'} class="nav-link">Our Menu <i class="fas fa-chevron-down"></i></a>
										<ul class="dropdown-menu">
											<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Menu 1</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Menu 2</a>
											</li>
										</ul>
									</li>
									<li class="nav-item">	<a href={'gallery.html'} class="nav-link">Gallery</a>
									</li>
									<li class="nav-item">	<a href={'/'} class="nav-link">Event <i class="fas fa-chevron-down"></i></a>
										<ul class="dropdown-menu">
											<li class="nav-item">	<a href={'event.html'} class="nav-link">Event</a>
											</li>
											<li class="nav-item">	<a href={'blog.html'} class="nav-link">Blog</a>
											</li>
											<li class="nav-item">	<a href={'single-blog.html'} class="nav-link">Blog Details</a>
											</li>
										</ul>
									</li>
									<li
										class={`nav-item  ${
										props.location.pathname === "/contact" ? "active" : ""
										}`}
									>
										<Link class="nav-link" to="/contact">
										Contact
										</Link>
									</li>
								</ul>
								<div class="other-option">
									<a class="default-btn" href="tel:0802235678">Call to Reservation</a>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
    	</div>	
  );
}

export default withRouter(Navigation);
