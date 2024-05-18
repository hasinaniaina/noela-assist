import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./partials/contactForm";

export default function Contact() {
  return (
    <div
      className=" page content flex w-full overflow-hidden md:flex-row sm:flex-col bg-[#fff]"
      id="page-contact"
    >
      <div className="left-content md:w-1/4 h-screen relative sm:w-full">
        <div className="content h-full absolute"></div>
      </div>
      <div className="right-content md:w-3/4 h-screen sm:w-full">
        <div className="content flex flex-col justify-center h-screen p-10">
          <div className="section-title w-fit">
            <h2 className="text-titleH2 text-custom-blue font-bold inline-block tracking-[-3px]">
              Qu&apos;attendez-vous? Contactez-moi!
            </h2>
            <div className="title-underline"></div>
          </div>
          <div className="contact-content sm:overflow-y-scroll md:overflow-hidden">
            <ContactForm />
            <div className="contact-info flex justify-center text-center mt-16 md:flex-nowrap sm:flex-wrap">
              <div className="location w-64">
                <div className="icon text-custom-marron m-4 text-[1.5rem]">
                  <FontAwesomeIcon icon={faLocation} />
                </div>
                <div className="text text-[#737373] tracking-tighter">
                  <p>Lot II B 47 Ampandrana Ouest, Antananarivo, Madagascar</p>
                </div>
              </div>
              <div className="phone w-64">
                <div className="icon text-custom-marron m-4 text-[1.5rem]">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="text text-[#737373] tracking-tighter">
                  <p>+261 32 86 715 32</p>
                </div>
              </div>
              <div className="email w-64">
                <div className="icon text-custom-marron m-4 text-[1.5rem]">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="text text-[#737373] tracking-tighter">
                  <p>marienoelavassist@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
