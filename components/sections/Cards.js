import React from "react";
import Link from "next/link";
import download from "downloadjs";

import ContactModalContext from "components/organisms/ContactModal.context";

import Section from "/components/templates/Section";

const Redovni_program = "/doc/Redovni_program.pdf";
const Radionice_KIBERone2 = "/doc/Radionice_KIBERone2.pdf";
const Edukacijiski_program_moduli1 = "/doc/Edukacijiski_program_moduli1.pdf";

const Card = (props) => {
  let [contactModalOpen, setContactModalOpen] =
    React.useContext(ContactModalContext);
  let handleOpenContactModal = () => setContactModalOpen(true);

  return (
    <a
      className="group relative basis-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 cursor-pointer"
      onClick={props.onClick || handleOpenContactModal}
    >
      <div className="absolute bg-blue-600 w-0 group-hover:w-full h-0 md:group-hover:h-full bottom-0 left-0 rounded-full transition-all duration-300 ease-in transform-gpu -translate-x-full translate-y-full scale-[4] hidden md:block"></div>
      <div className="relative transition-all text-white  flex flex-col justify-between space-y-4 p-8">
        {React.Children.map(props.children, (child) => child)}
      </div>
    </a>
  );
};

const Cards = () => {
  return (
    <Section className="flex flex-wrap md:flex-nowrap justify-between md:space-x-8 space-y-8 md:space-y-0 px-4">
      <Link href={Radionice_KIBERone2} passHref>
        <Card>
          {/* <span className="text-gray-300">#1</span> */}

          <h3 className="text-2xl font-semibold">Nastava u KIBERONE UŽIVO</h3>
          <span className="text-2xl text-gray-200 font-semibold">
          U programu KiberŠkole postoji više od 50 modula.
          </span>
          <span className="font-bold">Pregled modula</span>
        </Card> 
      </Link>
      <Link href={Radionice_KIBERone2} passHref>
        {/* <Card onClick={() => download(Radionice_KIBERone2)}> */}
        <Card>
          {/* <span className="text-gray-300">#2</span> */}

          <span className="text-2xl text-gray-200 font-semibold">
          Dijete bulji u ekran? Dovedite ga u KIBERone!
          </span>
          <h3 className="text-2xl font-semibold">
          Radionice programiranje za djecu

od 7 do 13 godina
          </h3>
          <span className="font-bold">Pregled programa</span>
        </Card>
      </Link>
      <Link href={Redovni_program} passHref>
        <Card>
          {/* <span className="text-gray-300">#3</span> */}
          <span className="text-2xl text-gray-200 font-semibold">
          Gubljenje vremena na gadgetima pretvaramo u korisno znanje!
          </span>
          <h3 className="text-3xl font-semibold">
          UPISI U TIJEKU!
          </h3>
          <span className="font-bold">Saznaj više</span>
        </Card>
      </Link>
    </Section>
  );
};

export default Cards;
