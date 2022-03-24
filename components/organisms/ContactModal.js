import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";

import ContactModalContext from "./ContactModal.context";

import Modal from "components/molecules/Modal";

import KidProfile from "assets/kid_profile.jpg";
import KiberoneNoviLogo from "assets/kiberon-zg-novi-logo.png";
import classNames from "classnames";

const PORTAL_ID = "25657475";
const FORM_GUID = "1c907513-b3ef-43b9-9e43-6552be414830";
const ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

const ContactModal = () => {
  const [contactModalOpen, setContactModalOpen] =
    React.useContext(ContactModalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
            value: ".",
          },
          {
            objectTypeId: "0-1",
            name: "email",
            value: data.email,
          },
          {
            objectTypeId: "0-1",
            name: "phone",
            value: data.phone,
          },
          {
            objectTypeId: "0-1",
            name: "dob_djeteta",
            value: data.dob,
          },
        ],
      });
      alert("Hvala, poruka je zaprimljena. Javit ćemo Vam se što prije!");
      setContactModalOpen(false);
      reset();
    } catch (e) {
      console.log(e.response.data.errors);
      alert(
        `Provjerite unesene podatke\n\nSadržaj Greške:\n${JSON.stringify(
          e.response.data.errors
        )}`
      );
    }
  };

  return (
    <Modal active={contactModalOpen} setActive={setContactModalOpen}>
      <div className="flex items-center justify-center space-x-4 ">
        <div className="relative w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
          <Image layout="fill" src={KiberoneNoviLogo} alt="kiberone-zg" />
        </div>
        <div className="">
          <span className="font-bold">KIBERone Zagreb</span>
          <br />
          <span>Okićka 17, 10000 Zagreb</span>
        </div>
      </div>
      <div className="p-8 font-bold text-xl text-center">
        Javite nam se putem kontakt forme - poslat ćemo vam pozivnicu na
        besplatnu{" "}
        <span className="text-cyan-500 italic">oglednu radionicu</span>, program
        edukacije i cijenu.
      </div>
      <form
        className="flex flex-col space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Ime */}
        <label className="flex flex-col space-y-2">
          <span className="text-sm required">Ime</span>
          <input
            className={classNames("input", {
              "input-error": errors.firstname,
            })}
            type="text"
            placeholder="Vaše ime"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-red-500">Molimo vas upišite ime</span>
          )}
        </label>

        {/* Broj Telefona */}
        <label className="flex flex-col space-y-2">
          <span className="text-sm required">Telefon</span>
          <input
            className={classNames("input", { "input-error": errors.phone })}
            type="phone"
            placeholder="Vaš broj telefona"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500">
              Molimo vas upišite broj telefona
            </span>
          )}
        </label>

        {/* Email */}
        <label className="flex flex-col space-y-2">
          <span className="text-sm required">Email</span>
          <input
            className={classNames("input", { "input-error": errors.email })}
            type="email"
            placeholder="Vaša email adresa"
            {...register("email", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500">Molimo vas upišite email</span>
          )}
        </label>

        {/* Dob djetea */}
        <label className="flex flex-col space-y-2">
          <span className="text-sm required">Dob djeteta</span>
          <input
            className={classNames("input", { "input-error": errors.dob })}
            type="number"
            placeholder="Dob vašeg djeteta"
            {...register("dob", { required: true })}
          />
          {errors.dob && (
            <span className="text-red-500">Molimo vas upišite dob djeteta</span>
          )}
        </label>

        {/* Nacina kontakta */}
        <div className="flex flex-col space-y-2">
          <span className="text-sm required">Kako da vas kontaktiramo?</span>
          <div className="space-y-1">
            <label className="flex items-center space-x-4">
              <input
                className="radio"
                type="radio"
                {...register("kontakt", { required: true })}
                value="email"
              />
              <span className="text-sm">Kontakt preko email-a</span>
            </label>
            <label className="flex items-center space-x-4">
              <input
                className="radio"
                type="radio"
                {...register("kontakt", { required: true })}
                value="telefon"
              />
              <span className="text-sm">Kontakt preko telefona-a</span>
            </label>
          </div>
          {errors.kontakt && (
            <span className="text-red-500">
              Molimo vas odaberite način kontakta
            </span>
          )}
        </div>

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
              Prihvaćam izjavu o davanju suglasnosti za obradu osobnih podataka
              u skladu s{" "}
              <Link href="/politika-privatnosti" passHref>
                <span className="underline cursor-pointer">politikom privatnosti</span>
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

        {/* Submit */}
        <button className="button" type="submit">
          Pošalji
        </button>
      </form>
    </Modal>
  );
};

export default ContactModal;
