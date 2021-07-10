import React from "react";

function Footer() {
  return (
    <div className="footer">

	<footer class="footer-area ptb-100">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-sm-12 footer-box-item">
					<div class="single-footer-widget">
						<div class="footer-heading">
							<h3>Notre localisation</h3>
						</div>
						<p>Grand Place 22
							<br />B-1480 TUBIZE</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 footer-box-item">
					<div class="single-footer-widget">
						<div class="footer-heading">
							<h3>Opening Hours</h3>
						</div>
						<p>Monday to Saturday
							<br />8:00 AM - 11:00 PM
							<br />Closed Sundays</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 col-sm-12 footer-box-item">
					<div class="single-footer-widget">
						<div class="footer-heading">
							<h3>Contact Info</h3>
						</div>
						<div class="footer-info-contact">	<a class="footer-number" href="tel:+32477224946">+32 477 22 49 46</a>
						</div>
						<div class="footer-info-contact">	<a href="mailto:info@pitivierevents.be">info@pitivierevents.be</a>
						</div>
						<ul class="footer-social">
							<li>
								<a href="/"> <i class="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="/"> <i class="fab fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="/"> <i class="fab fa-linkedin"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>

	<div class="copyright-area">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-6 col-md-6">
					<p>Pitivier Events © 2021 - Designed by Fullhestack.</p>
				</div>
				<div class="col-lg-6 col-md-6">
					<ul>
						<li> <a href="terms-condition.html">Terms & Conditions</a>
						</li>
						<li> <a href="privacy-policy.html">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="go-top">
		<i class="fas fa-chevron-up"></i>
		<i class="fas fa-chevron-up"></i>
	</div>

    </div>
  );
}

export default Footer;
