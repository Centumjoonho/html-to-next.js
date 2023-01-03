import "../styles/globals.css";
import React from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="js/jquery.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="js/jquery.mCustomScrollbar.concat.min.js"></Script>
      <Script src="js/jquery.fancybox.js"></Script>
      <Script src="js/appear.js"></Script>
      <Script src="js/owl.js"></Script>
      <Script src="js/wow.js"></Script>
      <Script src="js/parallax.min.js"></Script>
      <Script src="js/tilt.jquery.min.js"></Script>
      <Script src="js/jquery.paroller.min.js"></Script>
      <Script src="js/jquery-ui.js"></Script>
      <Script src="js/script.js"></Script>
      <Component {...pageProps} />
    </>
  );
}
