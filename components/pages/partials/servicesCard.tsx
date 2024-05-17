"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function ServicesCard() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

 
  return (
    <div className="embla ">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="services-content embla__container tracking-tighter mb-4">
          <div className="item embla__slide  flex flex-col rounded-[5px] p-[3px] text-center">
            <div className="logo-container w-[100%] h-[194px] bg-custom-blue rounded-t-[5px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center">
              <div className="logo">
                <img
                  src="assets/images/services-logo-1.png"
                  alt="logo"
                  className="w-[80px]"
                />
              </div>
            </div>
            <div className="services-text-holder">
              <div className="services-title">
                <p className="text-[1rem] font-semibold text-custom-blue m-[10px]">
                  Gestion Administrative
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#000000] h-[100%]">
                  <li>Gestion de l&apos;agenda et des rendez-vous.</li>
                  <li>Traitement des e-mails et filtrage des priorités.</li>
                  <li>Création et mise en forme de documents</li>
                  <li>Gestion de la correspondance.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item embla__slide   flex flex-col rounded-[5px] p-[3px] text-center  ">
            <div className="logo-container w-[100%] h-[194px] bg-custom-marron rounded-t-[5px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center">
              <div className="logo">
                <img
                  src="assets/images/services-logo-2.png"
                  alt="logo"
                  className="w-[80px]"
                />
              </div>
            </div>
            <div className="services-text-holder">
              <div className="services-title">
                <p className="text-[1rem] font-semibold text-custom-marron m-[10px]">
                Gestion de la relation client
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#000000] h-[100%]">
                  <li>Gestion de la base de données clients</li>
                  <li>Suivi des clients et relances</li>
                  <li>Gestion des réseaux sociaux et du service client en ligne</li>
                  <li>Organisation d&apos;événements et de webinaires</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="item embla__slide  flex flex-col rounded-[5px] p-[3px] text-center">
            <div className="logo-container w-[100%] h-[194px] bg-custom-fonceBlue rounded-t-[5px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center">
              <div className="logo">
                <img
                  src="assets/images/services-logo-3.png"
                  alt="logo"
                  className="w-[80px]"
                />
              </div>
            </div>
            <div className="services-text-holder">
              <div className="services-title">
                <p className="text-[1rem] font-semibold text-custom-fonceBlue m-[10px]">
                Gestion financière
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#000000] h-[100%]">
                  <li>Facturation et suivi des paiements</li>
                  <li>Préparation des documents comptables (factures, devis, bons de commande)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
