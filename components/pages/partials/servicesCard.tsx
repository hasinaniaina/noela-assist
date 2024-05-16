"use client";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesCard() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="services-content embla__container flex  tracking-tighter mb-4">
          <div className="item embla__slide shadow-sm  shadow-[#c5c2c2]   h-[350px] flex flex-col rounded-[5px] p-[3px] text-center mt-[2rem] mr-[2rem]">
            <div className="logo-container w-[194px] h-[194px] bg-custom-blue rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center  shadow-md shadow-[#b4b4b4]">
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
                <p className="text-[1.3rem] font-semibold text-custom-blue m-[10px]">
                  Gestion Administrative
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                  <li>Gestion des mails</li>
                  <li>Gestion d'agenda</li>
                  <li>Suivi des paiements</li>
                  <li>Facturation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item embla__slide shadow-sm shadow-[#c5c2c2]   h-[350px] flex flex-col rounded-[5px] p-[3px] text-center mt-[2rem] mr-[2rem]">
            <div className="logo-container w-[194px] h-[194px] bg-custom-marron rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center shadow-md shadow-[#b4b4b4]">
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
                <p className="text-[1.3rem] font-semibold text-custom-marron m-[10px]">
                  Gestion clientèle
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                  <li>Gestion des mails et appels téléphoniques</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="item embla__slide shadow-sm shadow-[#c5c2c2]   h-[350px] flex flex-col rounded-[5px] p-[3px] text-center mt-[2rem] mr-[2rem]">
            <div className="logo-container w-[194px] h-[194px] bg-custom-fonceBlue rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center shadow-md shadow-[#b4b4b4]">
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
                <p className="text-[1.3rem] font-semibold text-custom-fonceBlue m-[10px]">
                  Suivi après-vente (SAV)
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                  <li>Envoie des remerciements</li>
                  <li>Des suivis pour obtenir des retours d'expérience</li>
                  <li>Assuré la satisfaction des clients</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item embla__slide shadow-sm shadow-[#c5c2c2]   h-[350px] flex flex-col rounded-[5px] p-[3px] text-center mt-[2rem] mr-[2rem]">
            <div className="logo-container w-[194px] h-[194px] bg-custom-blue rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center  shadow-md shadow-[#b4b4b4]">
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
                <p className="text-[1.3rem] font-semibold text-custom-blue m-[10px]">
                  Gestion des relations
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                  <li>
                    Etablissement des bonnes relations avec le clients actuels
                    et potentiels, en assurant qu'ils se sentent prise en charge
                    et valorisés
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item embla__slide shadow-sm shadow-[#c5c2c2]   h-[350px] flex flex-col rounded-[5px] p-[3px] text-center mt-[2rem] mr-[2rem]">
            <div className="logo-container w-[194px] h-[194px] bg-custom-marron rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center shadow-md shadow-[#b4b4b4]">
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
                <p className="text-[1.3rem] font-semibold text-custom-marron m-[10px]">
                  Base de données client
                </p>
              </div>
              <div className="services-description">
                <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                  <li>
                    Maintien d’une base de données précise et organisée des
                    clients, de leurs besoins spécifiques, de leurs préférences
                    et de l'historique des interactions pour personnaliser
                    davantage les services offerts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
      </button>
      <button className="embla__next" onClick={scrollNext}>
      <FontAwesomeIcon icon={faArrowAltCircleRight}/>
      </button>
    </div>
  );
}
