import React from "react";

import "/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

import smoothscroll from "smoothscroll-polyfill";
// import React from "react";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
