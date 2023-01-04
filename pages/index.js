import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Script from "next/script";
// import jQuery from "jquery";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Centumjoonho</title>
        <meta name="description" content="joonho_portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="canonical" href="Replace_with_your_PAGE_URL" />
        {/* Stylesheets */}
        <link href="css/bootstrap.css" rel="stylesheet" />
        <link href="css/main.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Add site Favicon */}
        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.png" type="image/x-icon" />
        <meta name="msapplication-TileImage" content="images/favicon.png" />
      </Head>
      <Script src="http://code.jquery.com/jquery-latest.js"></Script>
      <Script src="http://code.jquery.com/jquery-3.5.1.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></Script>
      <Script src="js/jquery.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/wow.js"></Script>
      <Script src="js/parallax.min.js"></Script>

      <div className="page-wrapper">
        {/* Main Header*/}
        <header className="main-header">
          {/* Header Upper */}
          <div className="header-upper">
            <div className="outer-container">
              <div className="inner-container clearfix">
                <div className="pull-left logo-box">
                  <div className="logo">
                    <a href="#">
                      <img
                        src="images/logo.png"
                        alt=""
                        title=""
                        style={{ width: "20%", height: "20%" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="nav-outer pull-left clearfix">
                  {/* Mobile Navigation Toggler */}
                  <div className="mobile-nav-toggler">
                    <span className="icon ti-menu" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md">
                    <div className="navbar-header">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div
                      className="navbar-collapse show collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <li className="current">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Projects</a>
                          <ul>
                            <li>
                              <a href="projects.html">Projects</a>
                            </li>
                            <li>
                              <a href="projects-detail.html">Projects Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">Our Blog</a>
                            </li>
                            <li>
                              <a href="blog-detail.html">Blog Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/*End Header Upper*/}
        </header>
        {/*End Main Header */}
        {/* Banner Section */}
        <section className="banner-section">{/*  */}</section>

        {/* Project Section */}

        {/* Work Section */}
        <section
          className="work-section"
          style={{ backgroundImage: "url(images/background/1.jpg)" }}
        >
          <div className="auto-container">
            <div className="content">
              <div className="title"></div>
              <h1>
                Easy &amp; Trusted <br /> Progress
              </h1>
              <p>
                We understand that you’re hiring us to actually listen, and more{" "}
                <br /> importantly, understand your vision, so that your home
                reflects your spirit and <br /> personality, not ours. Above all
                else, when the project is finished, <br /> we want you to LOVE
                WHERE YOU LIVE
              </p>
              <a href="#" className="pdf-file">
                <span className="icon icofont-file-pdf" />
                Download Offer [.PDF]
              </a>
              <a
                href="https://www.youtube.com/watch?v=kxPCFljwJws"
                className="lightbox-image video-box clearfix"
              >
                See How we work
                <br />
                <span className="fa fa-play">
                  <i className="ripple" />
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* End Work Section */}
        {/* Testimonial Section */}
        <section
          className="testimonial-section"
          style={{ backgroundImage: "url(images/background/pattern-1.png)" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              {/* Carousel Column */}
              <div className="carousel-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="single-item-carousel owl-carousel owl-theme">
                    {/* Testimonial Block */}
                    <div className="testimonial-block">
                      <div className="inner-box">
                        <div className="quote-icon ion-quote" />
                        <h2>
                          Good companies will <br /> meet needs; great companies{" "}
                          <br /> will create markets.
                        </h2>
                        <p>
                          We thought a lot before choosing the Archo WordPress{" "}
                          <br /> Theme because we wanted to sure our investment
                          would yield results. This was clearly the best choice.
                        </p>
                        <div className="category">
                          <span>Van Helsing</span> - DIrector at Envato LLC
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Block */}
                    <div className="testimonial-block">
                      <div className="inner-box">
                        <div className="quote-icon ion-quote" />
                        <h2>
                          Good companies will <br /> meet needs; great companies{" "}
                          <br /> will create markets.
                        </h2>
                        <p>
                          We thought a lot before choosing the Archo WordPress{" "}
                          <br /> Theme because we wanted to sure our investment
                          would yield results. This was clearly the best choice.
                        </p>
                        <div className="category">
                          <span>Van Helsing</span> - DIrector at Envato LLC
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Block */}
                    <div className="testimonial-block">
                      <div className="inner-box">
                        <div className="quote-icon ion-quote" />
                        <h2>
                          Good companies will <br /> meet needs; great companies{" "}
                          <br /> will create markets.
                        </h2>
                        <p>
                          We thought a lot before choosing the Archo WordPress{" "}
                          <br /> Theme because we wanted to sure our investment
                          would yield results. This was clearly the best choice.
                        </p>
                        <div className="category">
                          <span>Van Helsing</span> - DIrector at Envato LLC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="image wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <img src="images/resource/testimonial.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Testimonial Section */}

        {/* News Section */}
        <section className="news-section">
          <div className="outer-container">
            <div className="clearfix">
              {/* News Block */}
              <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="blog-detail.html">
                      <img src="images/resource/news-1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <ul className="info-list">
                      <li>Dec 23 ,2020</li>
                      <li>news</li>
                    </ul>
                    <h4>
                      <a href="blog-detail.html">The Way Of Building</a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* News Block */}
              <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="blog-detail.html">
                      <img src="images/resource/news-2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <ul className="info-list">
                      <li>Dec 23 ,2020</li>
                      <li>inspiration</li>
                    </ul>
                    <h4>
                      <a href="blog-detail.html">
                        The Arch In Modern Architecture, Art &amp; Aesthetic
                        More
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* News Block */}
              <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="blog-detail.html">
                      <img src="images/resource/news-3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <ul className="info-list">
                      <li>Dec 23 ,2020</li>
                      <li>tips &amp; tricks</li>
                    </ul>
                    <h4>
                      <a href="blog-detail.html">
                        Spiral Stair, New Interior Design Trends 2020
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              {/* News Block */}
              <div className="news-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <a href="blog-detail.html">
                      <img src="images/resource/news-4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lower-content">
                    <ul className="info-list">
                      <li>Dec 23 ,2020</li>
                      <li>others</li>
                    </ul>
                    <h4>
                      <a href="blog-detail.html">Nordic Interior Style</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End News Section */}
        {/* Main Footer */}
        <footer className="main-footer">
          <div className="auto-container">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo-3.png" alt="" />
              </a>
            </div>
            <ul className="footer-page-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="contact-info">
              11 Broadway St, 12nd Floor, New York, NY 10004 <br />{" "}
              <a href="tel:+012-432-7121-20">(+012) 432-7121-20</a> <br />{" "}
              <a href="mailto:contact@konswptheme.com">
                contact@konswptheme.com
              </a>
            </div>
            <ul className="footer-social-icons">
              <li>
                <a href="http://facebook.com/" className="icofont-facebook" />
              </li>
              <li>
                <a href="https://twitter.com/" className="icofont-twitter" />
              </li>
              <li>
                <a href="http://google.com/" className="icofont-google-plus" />
              </li>
              <li>
                <a href="http://linkedin.com/" className="icofont-linkedin" />
              </li>
              <li>
                <a href="http://rss.com/" className="icofont-rss" />
              </li>
              <li>
                <a href="http://dribbble.com/" className="icofont-dribbble" />
              </li>
            </ul>
            <div className="copyright">
              Copyright © All rights reserved | Made with{" "}
              <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
              <a href="https://hasthemes.com/" target="_blank">
                HasThemes
              </a>
            </div>
          </div>
        </footer>
        {/* End Main Footer */}
      </div>
      {/*End pagewrapper*/}
    </>
  );
}
