import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import proyecto1 from "../assets/images/cardsPoke.png";
import proyecto2 from "../assets/images/devsDuff.png";
import proyecto3 from "../assets/images/dressCode.png";
import proyecto4 from "../assets/images/sge.png";
import proyecto5 from "../assets/images/apiEcommerce.png";
import "swiper/css";
import "swiper/css/pagination";

const Proyectos = () => {
  const projects = [
    {
      img: proyecto1,
      name: "Cards Poke",
      github_link: "https://github.com/georginacostilla/pruebaTecnica-RAppID",
      live_link: "https://cardspoke.netlify.app/",
    },
    {
      img: proyecto2,
      name: "Devs Duff",
      github_link: "https://github.com/georginacostilla/DevsDuffs",
      live_link: "https://devsduff.netlify.app/",
    },
    {
      img: proyecto3,
      name: "Dress Code",
      github_link: "https://github.com/georginacostilla/e-commerceDressCode",
      live_link: "https://rollingcodeschool-dresscode.netlify.app/",
    },
    {
      img: proyecto4,
      name: "SGE",
      github_link: "https://github.com/georginacostilla/proyectoFinalReactAdv",
      live_link: "https://github.com/georginacostilla/proyectoFinalReactAdv",
    },
    {
      img: proyecto5,
      name: "API e-commerce",
      github_link: "https://github.com/georginacostilla/proyecto-nest-grupo1",
      live_link: "https://github.com/georginacostilla/proyecto-nest-grupo1",
    },
  ];

  return (
    <section id="proyectos" className="py-10 text-white mt-16">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Mis <span className="text-primary">Proyectos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Trabajos destacados</p>
      </div>
      <br />
      <div className="max-w-6xl gap-6 px-5 mx-auto items-center relative flex justify-center">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Ver sitio
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;