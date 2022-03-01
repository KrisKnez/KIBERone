import React from "react";

import Section from "components/templates/Section";

const Contact = () => {
  return (
    <Section id="contact" className="flex flex-col md:flex-row soace-x-0 md:space-x-16 space-y-8 md:space-y-0">
      <div className="basis-1/2 flex flex-col justify-center text-center md:text-right">
        <h2 className="text-4xl font-semibold">
          Nazovite nas ili naručite poziv
        </h2>
        <h3 className="text-xl">
          Rado ćemo vam odgovoriti na sva vaša pitanja!
        </h3>
      </div>
      <div className="basis-1/2 px-8 py-12">
        {/* Contact Form */}
        <div className="relative">
          <div className="bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6 scale-x-105"></div>
          <div className="bg-sky-500 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6 scale-x-105"></div>
          <form className="relative bg-white shadow-lg w-full h-full rounded-3xl p-8 space-y-3">
            <label
              htmlFor="tel"
              className="flex flex-col text-gray-700 select-none font-medium"
            >
              Broj telefona: *
              <input
                id="tel"
                type="tel"
                placeholder="Vaš broj telefona / mobitela"
                className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </label>
            <label
              htmlFor="msg"
              className="flex flex-col text-gray-700 select-none font-medium"
            >
              Pitanje: *
              <textarea
                id="msg"
                placeholder="Vaše pitanje"
                className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </label>
            <button
              type="submit"
              className="font-medium border border-sky-600 bg-sky-600 text-white rounded-md px-4 py-2 transition duration-200 ease select-none hover:bg-sky-700 focus:outline-none focus:shadow-outline"
            >
              Naruči poziv
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
