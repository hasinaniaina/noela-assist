
"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Mask() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo("#logo",{opacity: 1}, { opacity: 0 })
    .to("#mask-left", {y: "100%", ease: "rough", duration: 1})
    .to("#mask-right", {y: "-100%", ease: "rough", duration: 1})
  });

  return (
    <div className="absolute  w-screen h-screen z-30" id="mask">
      <div className="mask-left-right-holder flex w-full h-full">
        <div
          className="mask-left h-full w-[50%] bg-custom-blue"
          id="mask-left"
        ></div>
        <div
          className="mask-right h-full w-[50%] bg-custom-fonceBlue"
          id="mask-right"
        ></div>
      </div>
      <img
        src="assets/images/logo.png"
        alt="noela logo"
        id="logo"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[50%]"
      />
    </div>
  );
}
