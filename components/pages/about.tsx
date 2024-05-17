import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div
      className=" page content flex w-full overflow-hidden md:flex-row sm:flex-col bg-[#fff]"
      id="page-about"
    >
      <div className="left-content md:w-1/4 h-screen relative sm:w-full">
        <div className="content h-full absolute"></div>
      </div>
      <div className="right-content md:w-3/4 h-screen sm:w-full">
        <div className="content flex flex-col justify-center h-screen p-10">
          <div className="section-title w-fit">
            <h2 className="text-titleH1 text-custom-blue font-bold inline-block tracking-[-3px] mb-4">
              Qui suis-je?
            </h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-content sm:overflow-scroll md:overflow-hidden">
            <p className="text-paragraph-color mb-4 text-justify tracking-tighter">
              Je suis une Assistante Virtuelle dédiée à vous offrir une
              expérience client exceptionnelle tout en prenant en charge
              efficacement vos tâches administratives. Avec une spécialisation
              dans le domaine de la relation client et de la gestion
              administrative, je suis là pour simplifier votre quotidien et vous
              permettre de vous concentrer sur ce qui compte vraiment pour vous.
            </p>

            <p className="text-paragraph-color mb-4 text-justify tracking-tighter">
              Dotée d'une passion pour l'organisation et la communication, je
              m'efforce de fournir un service personnalisé et de qualité
              supérieure à chacun de mes clients. Que ce soit en répondant à vos
              questions, en traitant vos demandes ou en gérant votre agenda, je
              suis là pour vous soutenir et vous aider à atteindre vos
              objectifs.
            </p>
            <p className="text-paragraph-color mb-4 text-justify tracking-tighter">
              Grâce à mes compétences techniques et à ma capacité d'adaptation,
              je suis en mesure de m'adapter à divers environnements
              professionnels et de répondre à une variété de besoins. Mon
              objectif est de vous libérer du stress lié à la gestion
              quotidienne afin que vous puissiez vous concentrer sur la
              croissance de votre entreprise et sur ce qui vous passionne
              vraiment.
            </p>
            <p className="text-paragraph-color mb-4 text-justify tracking-tighter">
              N'hésitez pas à explorer mon portfolio pour en savoir plus sur mes
              compétences et la manière dont je peux vous aider à optimiser
              votre temps et vos ressources. A bientôt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
