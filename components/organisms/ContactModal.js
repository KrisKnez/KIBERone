import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Modal from "components/molecules/Modal";

import KidProfile from "assets/kid_profile.jpg";
import classNames from "classnames";

const ContactModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal>
      <div className="flex items-center justify-center space-x-4 ">
        <div className="relative w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
          <Image layout="fill" src={KidProfile} alt="dijete profil" />
        </div>
        <div className="">
          <span className="font-bold">Lev Antonovich</span>
          <br />
          <span>Kiberbot, 24/7</span>
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
              "input-error": errors.fullname,
            })}
            type="text"
            placeholder="Vaše ime"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
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
            className={classNames("input", { "input-error": errors.age })}
            type="number"
            placeholder="Dob vašeg djeteta"
            {...register("age", { required: true })}
          />
          {errors.age && (
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

        {/* Submit */}
        <button className="button" type="submit">
          Pošalji
        </button>
      </form>
    </Modal>
  );
};

export default ContactModal;
