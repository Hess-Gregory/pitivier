import React from "react";
import about_1 from '../img/about-1.jpg';
import about_2 from '../img/about-2.jpg';
import about_3 from '../img/about-3.jpg';
import play_button_light from '../img/play-button-light.svg';
import { Link, withRouter } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <div class="home-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-8 offset-lg-2 col-md-12">
                  <div class="main-banner-content text-center">
                    <h1>Pitivier Events</h1>
                    <p>Traiteur & Organisation d'événements <br />De A à Z, tel est notre concept</p>
                    <div class="banner-btn">
                                        <Link class="default-btn-one" to="/">
                                        Nos tarifs
                                      </Link>

                                        <Link class="default-btn" to="/">
                                        Reservez votre évenement
                                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="about" class="about-area section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="about-content">
                <div class="about-content-text">
                  <h5>Notre objectif</h5>
                  <h2>Garnir vos plats et vos assiettes au gré de vos envies.</h2>
					<p>Tout d’abord, merci de l’intérêt que vous portez à Pitivier Events.<br />
					Ce site présente à titre indicatif notre vaste gamme de choix pouvant s’adapter à tout type d’événement.<br />
					Nous vous offrons un service personnalisé et complet, avec une prise en charge totale possible et un matériel fourni adéquat. Tout en vous garantissant des produits frais et, grâce aux camions réfrigérants, une chaîne du froid respectée à 100%.<br />
					Nous nous déplaçons chez vous pour personnaliser au mieux notre offre en fonction de vos désirs et de vos souhaits.<br />
					Nous pouvons également vous aider dans vos recherches pour une salle (selon envies et nombre de convives), dans la décoration de votre salle, pour trouver une voiture de cérémonie, ...<br />
					La réussite de vos évènements constitue pour nous notre meilleure carte de visite.<br />
					Nous rendrons votre réception inoubliable.<br />
					L'équipe de Pitivier Events</p>
                 
                  <div class="about-more-btn">	<Link class="default-btn" to="about.html">En savoir plus</Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="about-image-box">
                <div class="row">
                  <div class="col-md-12">
                    <div class="about-img">
                      <div class="about-img-1">
                        <img
                          src={about_1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-img">
                      <div class="about-img-2">
                        <img
                          src={about_2}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-img">
                      <div class="about-img-2">
                        <img
                          src={about_3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      	<section id="services" class="services-area section-padding">
		<div class="services-half-area"></div>
		<div class="container">
			<div class="row d-flex align-items-center">
				<div class="col-md-12">
					<div class="section-title">
						<h5 class="small-title">Tout Ce Que Vous Trouvez Dans notre</h5>
						<h2>Service de qualités</h2>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-chef"></i>
						</div>
						<div class="services-info">
							<h6>Nos chefs de cuisines</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-safety"></i>
						</div>
						<div class="services-info">
							<h6>Professionnel Et Organisé</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-fast-food"></i>
						</div>
						<div class="services-info">
							<h6>Nourriture De Haute Qualité</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-map-pins"></i>
						</div>
						<div class="services-info">
							<h6>Notre zone d'activités</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-building-alt"></i>
						</div>
						<div class="services-info">
							<h6>Location de salle</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-euro-true"></i>
						</div>
						<div class="services-info">
							<h6>Tarifs abordable</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  	<section class="menu-day-area section-padding ">
		<div class="container">
			<div class="section-title">
				<h5>Les tendances du moment</h5>
				<h2>Suggestions:</h2>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="menu-day-product-content">
						<div class="menu-day-tab-header">
							<ul class="menu-day-tab-list">
								<li class={` ${
										props.location.pathname === "/" ? "active" : ""
										}`}>	
                						<Link to="#tab-menu-1"><i class="icofont-juice"></i><br />Boissons</Link>
								</li>
								<li>	<Link to="#tab-menu-3"><i class="icofont-culinary"></i><br />Plats froid</Link>
								</li>
								<li>	<Link to="#tab-menu-4"><i class="icofont-restaurant"></i><br />Plats chaud</Link>
								</li>
								<li>	<Link to="#tab-menu-2"><i class="icofont-bbq"></i><br />Barbecues</Link>
								</li>
								<li>	<Link to="#tab-menu-5"><i class="icofont-cup-cake"></i><br />Dessert</Link>
								</li>
							</ul>
						</div>
						<div class="menu-day-main-tabs-content">
							<div class="menu-single-tab-content active" id="tab-menu-1">
								<div class="row">
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Scallop shell pies</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Brown shrimp Ranhofer</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Moules marinière</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$6.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Smoky salmon</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Garlic chilli clams</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Sea bream ceviche</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Seared tuna tataki</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$5.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Green gazpacho</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="menu-single-tab-content" id="tab-menu-2">
								<div class="row">
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Lobster Bisque</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Buffalo Wings or Tenders</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Mozzarella Sticks</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$6.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Grilled chicken</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$6.00</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Onion Rings</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Caesar Selections</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Crab Cake Sandwich</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$5.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Roast turkey</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$5.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="menu-single-tab-content" id="tab-menu-3">
								<div class="row">
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Plump lobster meat</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Tuna salad</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">French onion soup</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$6.00</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Soup and Sandwich</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Crisp romaine lettuce</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">savory crouton</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$5.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="menu-single-tab-content" id="tab-menu-4">
								<div class="row">
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Coke, Coke Light and Tab</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$10.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Fanta</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$1.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Lemonade</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$3.00</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Ginger ale</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$8.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Dry Lemon Appletizer</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$7.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Fresh Citrus</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$7.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="menu-single-tab-content" id="tab-menu-5">
								<div class="row">
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Mixed berry mousse</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Mango and coconut</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Homemade carrot cake</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$6.00</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Sponge Cake</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Full Month Cakes</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Sliced Cake</Link>
													<p>Notre passion pour l'excellente cuisine</p>
												</div>
												<div class="menu-product-price"><span>$5.00</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  	<section class="video-opening-hours-area">
		<div class="container">
			<div class="row d-flex align-items-center">
				<div class="col-lg-6 col-md-4">
					<div class="video-box">
          	<Link class="video-btn popup-youtube" to="https://www.youtube.com/watch?v=xg7iNd0qkDM">
							<img
								src={play_button_light}
								alt="play button icon"
							/>    
						</Link>
						<h3>Intro Video</h3>
					</div>
				</div>
				<div class="col-lg-5 offset-lg-1 col-md-8">
					<div class="store-location-opening-hours-box">
						<div class="contact-opening-hours-title">
							<h3>Appelez-nous pour réserver</h3>
							<h4>Infos Contacts </h4>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="single-store-location">
									<h3>Nous contacter</h3>
									<h6>Email: <Link to="mailto:info@pitivierevents.be">info@pitivierevents.be</Link></h6>
									<h6>Phone: <Link to="tel:+32477224946">+32 477 22 49 46</Link></h6>
									<p>Grand Place 22, B-1480 TUBIZE</p>
								</div>
								<div class="opening-hours-box">
									<h6 class="day">Monday to Saturday</h6> 	<span class="time">8:00 AM - 10:00 PM</span>
									<p>Closed Sundays</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  );
}

export default withRouter(Home);
