import React from "react";
import { useForm } from "react-hook-form";

import Section from "components/templates/Section";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>
    window
      .open(`https://wa.me/385953943344?text=${data.question}`, "_blank")
      .focus();

  return (
    <Section
      id="contact"
      className="flex flex-col md:flex-row soace-x-0 md:space-x-16 space-y-8 md:space-y-0"
    >
      <div className="basis-1/2 flex flex-col justify-center text-center md:text-right">
        <h2 className="text-4xl font-semibold">
          Nazovite nas ili dogovorite poziv
        </h2>
        <h3 className="text-xl">
          Rado ćemo vam odgovoriti na sva vaša pitanja!
        </h3>
      </div>
      <div className="basis-1/2 px-8 py-12">
        {/* Contact Form */}
        <div className="relative">
          <div className="bg-cyan-500 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6 scale-x-105"></div>
          <div className="bg-black shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6 scale-x-105"></div>
          <form
            className="relative bg-white shadow-lg w-full h-full rounded-3xl p-8 space-y-3 flex flex-wrap"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full space-x-5">
              {/* Ime */}
              <label
                htmlFor="tel"
                className="flex flex-col text-gray-700 select-none font-medium w-1/2 space-y-1"
              >
                <span>
                  Ime:<span className="text-red-500">*</span>
                </span>
                <input
                  id="tel"
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="Vaše ime"
                  className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </label>

              {/* Prezime */}
              <label
                htmlFor="tel"
                className="flex flex-col text-gray-700 select-none font-medium w-1/2 space-y-1"
              >
                <span>
                  Prezime:<span className="text-red-500">*</span>
                </span>

                <input
                  id="tel"
                  type="text"
                  {...register("lastName", { required: true })}
                  placeholder="Vaše prezime"
                  className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </label>
            </div>

            {/* Broj Telefona */}
            <label
              htmlFor="tel"
              className="flex flex-col text-gray-700 select-none font-medium w-full space-y-1"
            >
              <span>
                Broj telefona:<span className="text-red-500">*</span>
              </span>
              <input
                id="tel"
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Vaš broj telefona / mobitela"
                className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </label>

            {/* Message */}
            <label
              htmlFor="msg"
              className="flex flex-col text-gray-700 select-none font-medium w-full space-y-1"
            >
              <span>
                Pitanje:<span className="text-red-500">*</span>
              </span>
              <textarea
                id="msg"
                {...register("question", { required: true })}
                placeholder="Vaše pitanje"
                className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </label>
            <div className="w-full">
              <button type="submit" className="button">
                Dogovori poziv
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
