import React from "react";
import ReactDOM from "react-dom";
/** Bootstrap Min CSS */
import "./css/bootstrap.min.css";
/** Animate Min CSS */
import "./css/animate.min.css";
/** ET Line Icon CSS */
import "./css/icofont.min.css";
/** FlatIcon CSS */
import "./css/flaticon.css";
/** Mran Menu CSS */
import "./css/meanmenu.css";
/** Magnific Popup Min CSS */
import "./css/magnific-popup.min.css";
/** Nice Select Min CSS */
import "./css/nice-select.min.css";
/** Owl Carousel Min CSS */
import "./css/owl.carousel.min.css";
/** Font Awesome Min CSS */
import "./css/fontawesome.min.css";
/** Swiper Min CSS */
import "./css/swiper.min.css";
/** Style CSS */
import "./css/style.css";
/** Responsive CSS */
import "./css/responsive.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
