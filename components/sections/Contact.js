import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Link from "next/link";

import axios from "axios";

import Section from "components/templates/Section";

const PORTAL_ID = "25657475";
const FORM_GUID = "b14de669-5dfe-4ec3-b9be-3cc962fcfcdf";
const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let response = await axios.post(ENDPOINT, {
        fields: [
          {
            objectTypeId: "0-1",
            name: "firstname",
            value: data.firstname,
          },
          {
            objectTypeId: "0-1",
            name: "lastname",
            value: data.lastname,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: data.phone,
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: data.email,
          },
          {
            objectTypeId: "0-1",
            name: "message",
            value: data.message,
          },
        ],
      });

      alert("Hvala, poruka je zaprimljena. Javit ćemo Vam se što prije!");
      reset();
    } catch (e) {
      console.error(e);
      alert("Provjerite unesene podatke");
    }
  };

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
            className="relative bg-white shadow-lg w-full h-full rounded-3xl p-8 space-y-4 flex flex-wrap"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap w-full space-y-5 md:space-y-0 md:space-x-5">
              {/* Ime */}
              <label
                htmlFor="firstname"
                className="flex flex-col text-gray-700 select-none font-medium w-full md:w-1/2 space-y-1"
              >
                <span className="space-x-1">
                  <span>Ime:</span>
                  <span className="text-red-500">*</span>
                </span>
                <input
                  id="firstname"
                  type="text"
                  {...register("firstname", { required: true })}
                  placeholder="Vaše ime"
                  className="input"
                />
              </label>

              {/* Prezime */}
              <label
                htmlFor="lastname"
                className="flex flex-col text-gray-700 select-none font-medium w-full md:w-1/2 space-y-1"
              >
                <span className="space-x-1">
                  <span>Prezime:</span>
                  <span className="text-red-500">*</span>
                </span>

                <input
                  id="lastname"
                  type="text"
                  {...register("lastname", { required: true })}
                  placeholder="Vaše prezime"
                  className="input"
                />
              </label>
            </div>

            {/* Broj Telefona */}
            <label
              htmlFor="tel"
              className="flex flex-col text-gray-700 select-none font-medium w-full space-y-1"
            >
              <span className="space-x-1">
                <span>Broj telefona:</span>
                <span className="text-red-500">*</span>
              </span>
              <input
                id="tel"
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Vaš broj telefona / mobitela"
                className="input"
              />
            </label>

            {/* Email adresa */}
            <label
              htmlFor="email"
              className="flex flex-col text-gray-700 select-none font-medium w-full space-y-1"
            >
              <span className="space-x-1">
                <span>Email:</span>
                <span className="text-red-500">*</span>
              </span>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="Vaš email"
                className="input"
              />
            </label>

            {/* Message */}
            <label
              htmlFor="message"
              className="flex flex-col text-gray-700 select-none font-medium w-full space-y-1"
            >
              <span className="space-x-1">
                <span>Pitanje:</span>
                <span className="text-red-500">*</span>
              </span>
              <textarea
                id="message"
                {...register("message", { required: true })}
                placeholder="Vaše pitanje"
                className="input"
              />
            </label>

            {/* GDPR */}
            <div className="flex flex-col">
              <label className="flex">
                <input
                  className={classNames("my-1 mr-2", {
                    "input-error": errors.gdpr,
                  })}
                  type="checkbox"
                  {...register("gdpr", { required: true })}
                />
                <span className="text-sm">
                  Prihvaćam izjavu o davanju suglasnosti za obradu osobnih
                  podataka u skladu s{" "}
                  <Link href="/politika-privatnosti" passHref>
                    <span className="underline cursor-pointer">
                      politikom privatnosti
                    </span>
                  </Link>{" "}
                  i ponudom.
                </span>
              </label>
              {errors.gdpr && (
                <span className="text-red-500">
                  Molimo vas prihvatite GDPR pravila.
                </span>
              )}
            </div>

            <div className="w-full">
              <button type="submit" className="button w-full md:w-auto">
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
