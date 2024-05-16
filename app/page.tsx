import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Home from "@/components/pages/home";
import Services from "@/components/pages/services";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Main() {
  return (
    <div className="container m-0 p-0 ">
      <main className="w-screen bg-[#13284d]">
        <header className="relative">
          <button className="menu-hamburger menu-button absolute right-0 top-0 p-[10px] ">
            <span>Menu</span>
          </button>

          <nav className="pages-nav">
            <div className="pages-nav__item">
              <a className="link link--page tracking-tighter" href="#page-home">
                Home
              </a>
            </div>
            <div className="pages-nav__item">
              <a className="link link--page " href="#page-about">
                A propos
              </a>
            </div>
            <div className="pages-nav__item">
              <a className="link link--page tracking-tighter" href="#page-services">
                Services
              </a>
            </div>
            <div className="pages-nav__item">
              <a className="link link--page tracking-tighter" href="#page-contact">
                Contact
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
  );
}
