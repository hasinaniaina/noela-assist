import Link from "next/link";
import { useEffect } from "react";
import { handleMessage } from "@/lib/utils";

export default function Home() {

  return (
    <div className=" page content flex w-screen overflow-hidden md:flex-row sm:flex-col bg-[#fff] tracking-tighter" id="page-home">
      <div className="left-content md:w-1/4 h-screen relative sm:w-full">
        <div className="content h-full absolute"></div>
      </div>
      <div className="right-content md:w-3/4 h-screen sm:w-full relative">
        <div className="content flex flex-col justify-center h-screen p-10">
          <h2 className="hello-there  sm:text-responsiveSmTitleH2 md:text-titleH2  font-thin mb-2">Hello, there</h2>
          <h1 className="i-m md:text-titleH1 sm:text-responsiveSmTitleH1 sm:mb-4 font-thin mb-2">
            Je suis{" "}
            <span className="name text-custom-blue font-bold ">
              NOELA RAKOTONINDRINA
            </span>
          </h1>
          <h2 className="virtual-assistant md:text-titleH2 sm:text-responsiveSmTitleH2 font-light mb-8">Votre Assistante Virtuelle</h2>
          <Link
            href=""
            className="w-fit px-[2rem] py-[.5rem] rounded-sm text-white sm:text-[.7rem] md:text-[1rem]  font-bold transition ease-in-out delay-150 bg-custom-marron  hover:scale-105 hover:bg-custom-hoverMarron duration-200 text-center"
          >
            Télécharger CV
          </Link>
          <div className="social-media flex flex-row absolute right-8 bottom-4">
            <Link href=""><img src="assets/images/linkedin.png" alt="linkedin" className="w-[40px] mr-[1rem] hover:scale-105 " /></Link>
            <Link href=""><img src="assets/images/instagram.png" alt="instagram" className="w-[40px] mr-[1rem]  hover:scale-105 " /></Link>
            <Link href=""><img src="assets/images/facebook.png" alt="facebook" className="w-[40px] hover:scale-105 "/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
