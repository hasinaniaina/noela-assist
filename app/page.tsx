"use client";
import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Home from "@/components/pages/home";
import Services from "@/components/pages/services";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useState } from "react";
config.autoAddCss = false;

export default function Main() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setIsShow(true);
    }, 1000);
  }, [])
  return (
    <>
      <div className={"container m-0 p-0 w-screen overflow-hidden max-w-[100vw] " + (isShow ? "" : "hidden")}>
        <main className=" bg-[#13284d]  relative">
          <header className="relative">
            <button className="menu-hamburger menu-button absolute right-0 top-0 p-[10px] ">
              <span>Menu</span>
            </button>

            <nav className="pages-nav">
              <div className="pages-nav__item">
                <a
                  className="link link--page tracking-tighter"
                  href="#page-home"
                >
                  Accueil
                </a>
              </div>
              <div className="pages-nav__item">
                <a className="link link--page " href="#page-about">
                  A propos
                </a>
              </div>
              <div className="pages-nav__item">
                <a
                  className="link link--page tracking-tighter"
                  href="#page-services"
                >
                  Services
                </a>
              </div>
              <div className="pages-nav__item">
                <a
                  className="link link--page tracking-tighter"
                  href="#page-contact"
                >
                  Contacts
                </a>
              </div>
            </nav>
          </header>
          <div className="pages-stack ">
            <Home />
            <About />
            <Services />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}
