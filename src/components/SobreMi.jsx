import aboutImg from "../assets/images/sobreMi.png";

const SobreMi = () => {

  const info = [
    { text: "Años de formación", count: "05" },
    { text: "Tecnologías dominadas", count: "15" },
    { text: "Becas obtenidas", count: "03" },
  ];

  return (
    <>
      <section id="sobreMi" className="py-10 text-white">
        <div className="text-center">
          <h3 className="text-4xl font-semibold">
            Sobre <span className="text-primary">mi</span>
          </h3>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <>
                  <p className="text-justify leading-7 w-11/12 mx-auto">
                    Mi nombre es Georgina, soy <strong>Programadora</strong> recibida en la <strong>UTN-FRT</strong> y <strong>Técnica Universitaria en Ciencias de la
                      Comunicación Social graduada en la <strong>UNT</strong>.</strong> Actualmente me encuentro escribiendo mi tesis de Licenciatura.
                    <br />
                    Complementé mi formación académica con distintas becas y especializaciones:
                  </p>
                  <ol className="text-justify leading-7 list-disc list-inside w-11/12 mx-auto">
                    <li><strong>Programación FullStack</strong> (Beca en Rolling Code School, 2023)</li>
                    <li><strong>Especialización en ReactJS</strong> (Rolling Code School, 2024)</li>
                    <li><strong>Backend developer</strong>, trabajando con NestJS, Swagger y PostgreSQL (Beca en Vortex Software, 2024)</li>
                  </ol>
                  <p className="text-justify leading-7 list-disc list-inside w-11/12 mx-auto">
                    Mi objetivo siempre ha sido fusionar los conocimientos de Comunicación y Programación para potenciar mi desarrollo personal,
                    profesional y futuro laboral.
                  </p>
                </>
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
                <a href="./src/assets/CV-Georgina-Costilla.pdf" download>
                  <button className="btn-primary, text-primary text-lg">Descargar CV</button>
                </a>
              </div>
            </div>
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

export default SobreMi;