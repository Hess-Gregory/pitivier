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
                  <h5>Our Story</h5>
                  <h2>Welcome to Vegan Resturant</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing adipiscing elit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing incididunt ut labore et dolore elit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur adipiscing elit.</p>
                  <div class="about-more-btn">	<Link class="default-btn" to="about.html">Read More</Link>
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
						<h5 class="small-title">Everything You Find In</h5>
						<h2>Quality of Service</h2>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-dumbbell"></i>
						</div>
						<div class="services-info">
							<h6>Gold Spa & Fitness Club</h6>
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
							<h6>Perfect Location</h6>
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
							<h6>High Quality Food</h6>
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
							<h6>Professional and Organized</h6>
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
							<h6>Residence & Accommodation</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="single-services-item">
						<div class="services-icon">
							<i class="icofont-network-tower"></i>
						</div>
						<div class="services-info">
							<h6>Extra Facilities</h6>
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
				<h5>Tasty & Spicy Recipes</h5>
				<h2>Our Menu</h2>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="menu-day-product-content">
						<div class="menu-day-tab-header">
							<ul class="menu-day-tab-list">
								<li class={` ${
										props.location.pathname === "/" ? "active" : ""
										}`}>	
                <Link to="#tab-menu-1"><i class="icofont-fruits"></i><br />Starter</Link>
								</li>
								<li>	<Link to="#tab-menu-2"><i class="icofont-lunch"></i><br />Lunch</Link>
								</li>
								<li>	<Link to="#tab-menu-3"><i class="icofont-pizza"></i><br />Dinner</Link>
								</li>
								<li>	<Link to="#tab-menu-4"><i class="icofont-juice"></i><br />Drinks</Link>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Brown shrimp Ranhofer</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Moules marinière</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$6.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Smoky salmon</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Sea bream ceviche</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Seared tuna tataki</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$5.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Green gazpacho</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Buffalo Wings or Tenders</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Mozzarella Sticks</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$6.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Grilled chicken</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Caesar Selections</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Crab Cake Sandwich</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$5.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Roast turkey</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Tuna salad</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">French onion soup</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Crisp romaine lettuce</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">savory crouton</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$10.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Fanta</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$1.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Lemonade</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$8.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Dry Lemon Appletizer</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$7.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Fresh Citrus</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Mango and coconut</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Homemade carrot cake</Link>
													<p>Our passion for the excellent food</p>
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
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$12.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Full Month Cakes</Link>
													<p>Our passion for the excellent food</p>
												</div>
												<div class="menu-product-price"><span>$2.00</span>
												</div>
											</div>
										</div>
										<div class="menu-single-product-horizontal">
											<div class="menu-product-info-box">
												<div class="menu-product-details"><Link class="menu-product-title" to="#">Sliced Cake</Link>
													<p>Our passion for the excellent food</p>
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
