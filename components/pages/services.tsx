import React from "react";

export default function Services() {
  return (
    <div
      className=" page content flex w-full overflow-hidden md:flex-row sm:flex-col bg-[#fff]"
      id="page-services"
    >
      <div className="left-content md:w-1/4 h-screen relative sm:w-full">
        <div className="content h-full absolute"></div>
      </div>
      <div className="right-content md:w-3/4 h-screen sm:w-full">
        <div className="content flex flex-col justify-center h-screen p-10">
          <div className="section-title w-fit">
            <h2 className="text-titleH2 text-custom-blue font-bold inline-block tracking-[-3px]">
              Que puis-je faire pour vous?
            </h2>
            <div className="title-underline"></div>
          </div>
          <div className="services-content flex items-center justify-center flex-wrap">
            <div className="item shadow-sm shadow-custom-blue  w-[200px] h-[350px] flex flex-col rounded-[10px] p-[10px] text-center mt-[2rem] mr-[2rem]">
                <div className="logo-container w-[180pX] h-[180px] bg-custom-blue rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center">
                    <div className="logo">
                        <img src="assets/images/services-logo-1.png" alt="logo" className="w-[80px]" />
                    </div>
                </div>
                <div className="services-text-holder">
                    <div className="services-title">
                        <p className="text-[1.3rem] font-semibold text-[#595959] m-[10px]">Services</p>
                    </div>
                    <div className="services-description">
                        <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="item shadow-sm shadow-custom-marron  w-[200px] h-[350px] flex flex-col rounded-[10px] p-[10px] text-center mt-[2rem] mr-[2rem]">
                <div className="logo-container w-[180pX] h-[180px] bg-custom-marron rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center">
                    <div className="logo">
                        <img src="assets/images/services-logo-2.png" alt="logo" className="w-[80px]" />
                    </div>
                </div>
                <div className="services-text-holder">
                    <div className="services-title">
                        <p className="text-[1.3rem] font-semibold text-[#595959] m-[10px]">Services</p>
                    </div>
                    <div className="services-description">
                        <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="item shadow-sm shadow-custom-fonceBlue  w-[200px] h-[350px] flex flex-col rounded-[10px] p-[10px] text-center mt-[2rem] mr-[2rem]">
                <div className="logo-container w-[180pX] h-[180px] bg-custom-fonceBlue rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px] flex items-center justify-center">
                    <div className="logo">
                        <img src="assets/images/services-logo-3.png" alt="logo" className="w-[80px]" />
                    </div>
                </div>
                <div className="services-text-holder">
                    <div className="services-title">
                        <p className="text-[1.3rem] font-semibold text-[#595959] m-[10px]">Services</p>
                    </div>
                    <div className="services-description">
                        <ul className="text-[.9rem] font-thin text-[#4f4f4f]">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
