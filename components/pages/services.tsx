import ServicesCard from "./partials/servicesCard";

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
          <ServicesCard />
        </div>
      </div>
    </div>
  );
}
