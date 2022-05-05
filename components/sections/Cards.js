import React from "react";
import Link from "next/link";

import ContactModalContext from "components/organisms/ContactModal.context";

import Section from "/components/templates/Section";

let KampPDF1Path = "/doc/WEB_Ljetni_KAMP2022_1.pdf";
let KampPDF2Path = "/doc/WEB_Ljetni_KAMP2022_2.pdf";

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
      <Link href={KampPDF1Path} passHref>
        <Card onClick={undefined}>
          {/* <span className="text-gray-300">#1</span> */}

          <h3 className="text-2xl font-semibold">LJETNA IT ŠKOLA</h3>
          <span className="text-2xl text-gray-200 font-semibold">
            Za mlade digitalce od 7 do 13 godina
          </span>
          <span className="font-bold">Saznaj više</span>
        </Card>
      </Link>
      <Link href={KampPDF2Path} passHref>
        <Card onClick={undefined}>
          {/* <span className="text-gray-300">#2</span> */}

          <span className="text-2xl text-gray-200 font-semibold">
            Kako dijeci strukturirati ljetne praznici, kako izbjeći da budu
            stalno na mobitelu?
          </span>
          <h3 className="text-2xl font-semibold">
            Radionice vikendom LJETO 2022.
          </h3>
          <span className="font-bold">Saznaj više</span>
        </Card>
      </Link>
      <Card>
        {/* <span className="text-gray-300">#3</span> */}
        <h3 className="text-3xl font-semibold">
          Kako izgleda pohađanje edukacije u KIBERone-u?
        </h3>
        <span className="font-bold">Saznaj više</span>
      </Card>
    </Section>
  );
};

export default Cards;
