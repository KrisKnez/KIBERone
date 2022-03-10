import React from "react";

// import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

const Location = () => {
  const mapContainer = React.useRef(null);

  // let mapsRef = React.useRef();

  // React.useEffect(() => {
  //   const loader = new Loader({
  //     apiKey: "AIzaSyARufuQvFxylQS0P9VLLco0eh5hvNM381c",
  //     version: "weekly",
  //     libraries: ["places"],
  //   });

  //   // 45.79992671416137, 15.94703937725718
  //   const mapOptions = {
  //     center: {
  //       lat: 45.79992671416137,
  //       lng: 15.94703937725718,
  //     },
  //     zoom: 12,
  //   };

  //   // Promise
  //   loader
  //     .load()
  //     .then((google) => {
  //       new google.maps.Map(mapsRef.current, mapOptions);
  //     })
  //     .catch((e) => {
  //       // do something
  //       console.error(e)
  //     });
  // }, []);

  // React.useLayoutEffect(() => {
  //   mapboxgl.accessToken =
  //     "pk.eyJ1IjoiYWRvbmxpYyIsImEiOiJjbDBhMnh0ankwajE1M2NueTZjbG90bjR3In0.Wle-7mMK7Cv1dHT_B_0BaA";
  //   const map = new mapboxgl.Map({
  //     container: mapContainer.current, // container ID
  //     style: "mapbox://styles/mapbox/streets-v11", // style URL
  //     center: [-74.5, 40], // starting position [lng, lat]
  //     zoom: 9, // starting zoom
  //   });
  // }, []);

  return (
    <section className="bg-black text-white overflow-auto py-10">
      <div className="container mx-auto max-w-screen-xl text-center space-y-5 px-4">
        <h2 className="text-4xl font-bold">Lokacija u Zagrebu</h2>
        <h3 className="text-lg">Kontakt: <a href="tel:385953943344">+385 95 394 33 44</a></h3>
        <div
          ref={mapContainer}
          id="map"
          className="bg-white overflow-hidden rounded-3xl h-96"
        >
          <iframe
            className="w-full h-full overflow-hidden rounded-3xl"
            loading="lazy"
            title="Google Maps"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDY3JL8yrlEz-qoV1gkhpy7AVUdi5MoBak
    &q=KIBERone+Zagreb&zoom=15&language=hr"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
