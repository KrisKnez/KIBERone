import React from "react";

const Location = () => {
  return (
    <section className="bg-black text-white overflow-auto py-10 px-8">
      <div className="container mx-auto max-w-screen-lg text-center space-y-4">
        <h2 className="text-5xl font-bold">Lokacije u Zagrebu</h2>
        <h3 className="text-xl">Kontakt: +385 95 394 33 44</h3>
        <div className="bg-white overflow-hidden rounded-3xl h-96">
          {/* <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88945.59460070543!2d15.894292230200715!3d45.84029414717392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d692c902cc39%3A0x3a45249628fbc28a!2sZagreb!5e0!3m2!1shr!2shr!4v1645840307358!5m2!1shr!2shr"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
};

export default Location;
