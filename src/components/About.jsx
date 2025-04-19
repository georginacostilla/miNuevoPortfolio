import aboutImg from "../assets/images/sobreMi.png";

const About = () => {

  const info = [
    { text: "Años de formación", count: "05" },
    { text: "Tecnologías dominadas", count: "15" },
    { text: "Becas obtenidas", count: "03" },
  ];

  return (
    <>
      <section id="about" className="py-10 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            Sobre <span className="text-primary">mi</span>
          </h3>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  Mi nombre es Georgina, soy Programadora graduada en la UTN-FRT y Técnica Universitaria en Ciencias de la
                  Comunicación Social. Actualmente me encuentro escribiendo mi tesis de Licenciatura en la UNT.
                  <br />
                  Complementé mi formación académica con distintas becas y especializaciones:
                  <ol className="text-justify leading-7 list-disc list-inside">
                    <li>Programación Full Stack (Beca en Rolling Code School, 2023)</li>
                    <li>Especialización en ReactJS (Rolling Code School, 2024)</li>
                    <li>Backend developer, trabajando con NestJS, Swagger y PostgreSQL (Beca en Vortex Software, 2024)</li>
                  </ol>
                  Mi objetivo siempre ha sido fusionar los conocimientos de Comunicación y Programación para potenciar mi desarrollo personal, profesional y futuro laboral.
                </p>
                <div className="flex mt-10 items-center gap-7">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count}
                        <span className="text-primary">+</span>{" "}
                      </h3>
                      <span className="md:text-base text-xs">{content.text}</span>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <a href="./src/assets/CV_GeorginaCostilla.pdf" download>
                  <button className="btn-primary, text-primary">Descargar CV</button>
                </a>
              </div>
            </div>
            {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                <img
                  src={aboutImg}
                  alt=""
                  className="w-full object-cover bg-cyan-600 rounded-xl"
                />
              </div>
            </div> */}
            <div className="flex-1 md:mt-0 flex justify-center items-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 relative">
                <img
                  src={aboutImg}
                  alt="Georgina Costilla"
                  className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg mt-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;