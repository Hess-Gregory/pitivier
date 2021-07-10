import React from "react";
import logo from '../img/logo2.png';
import logo_black from '../img/logo2.png';
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
								class="white-logo logo-brand"
								src={logo}
								alt="logo"
								/>
							<img
								class="black-logo logo-brand"
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
										Accueil
										</Link>
									</li>
									<li
										class={`nav-item  ${
										props.location.pathname === "/about" ? "active" : ""
										}`}
									>
										<Link class="nav-link" to="/about">
										A propos
										</Link>
									</li>

									<li class="nav-item">	<a href={'/'} class="nav-link">Cartes <i class="fas fa-chevron-down"></i></a>
										<ul class="dropdown-menu">
											<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Zakouskis</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Potages & crèmes</a>
											</li>
											<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Entrées</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Viandes</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Poissons</a>
											</li>
											<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Idées menus</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Barbecues</a>
											</li>
											<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Paëlla & Pizzas/Pâte</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Formules Sandwichs</a>
											</li>
											<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Buffet fromages</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Desserts</a>
											</li>
											<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Suggestions du moment</a>
											</li>
											<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Boissons</a>
											</li>
										</ul>
									</li>

<li class="nav-item">	<a href={'/'} class="nav-link">Buffets <i class="fas fa-chevron-down"></i></a>
	<ul class="dropdown-menu">
		<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Buffet viande</a>
		</li>
		<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Buffet froid maritime</a>
		</li>
		<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Buffet campagnard</a>
		</li>
		<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Buffet fromage & jambon fumé</a>
		</li>
		<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Buffet classique</a>
		</li>
		<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Buffet prestige</a>
		</li>
		<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Buffet coup de coeur</a>
		</li>
		<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Buffet belge</a>
		</li>
		<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Buffet italien</a>
		</li>
		<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Buffet fromages</a>
		</li>
		<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Buffet espagnol</a>
		</li>
		<li class="nav-item">	<a href={'menu-1.html'} class="nav-link">Buffet international</a>
		</li>
		<li class="nav-item">	<a href={'menu-2.html'} class="nav-link">Plats chauds pour buffet</a>
		</li>
	</ul>
</li>
									<li class="nav-item">	<a href={'gallery.html'} class="nav-link">Gallerie</a>
									</li>
									<li class="nav-item">	<a href={'/'} class="nav-link">Location <i class="fas fa-chevron-down"></i></a>
										<ul class="dropdown-menu">
											<li class="nav-item">	<a href={'event.html'} class="nav-link">Location de matériel</a>
											</li>
											<li class="nav-item">	<a href={'blog.html'} class="nav-link">Location de salles</a>
											</li>
											<li class="nav-item">	<a href={'single-blog.html'} class="nav-link">Location de véhicules de prestige</a>
											</li>
										</ul>
									</li>
									<li class="nav-item">	<a href={'/'} class="nav-link">Evenements <i class="fas fa-chevron-down"></i></a>
										<ul class="dropdown-menu">
											<li class="nav-item">	<a href={'event.html'} class="nav-link">Event</a>
											</li>
											<li class="nav-item">	<a href={'blog.html'} class="nav-link">Blog</a>
											</li>
											<li class="nav-item">	<a href={'single-blog.html'} class="nav-link">Blog Details</a>
											</li>
											<li class="nav-item">	<a href={'single-blog.html'} class="nav-link">Liens</a>
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
									<a class="default-btn" href="tel:+32477224946">Reservation</a>
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
