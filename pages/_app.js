import React from "react";

// import { polyfill } from "smoothscroll-polyfill";
import 'smoothscroll-anchor-polyfill'

import "/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }) {
  // React.useEffect(() => {
  //   polyfill();
  // }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
