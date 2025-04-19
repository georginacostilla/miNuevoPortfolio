import hero from "../assets/images/skills.png";

const Hero = () => {
  const redes = [
    {
      icon: "logo-linkedin",
      url: "https://www.linkedin.com/in/georgina-costilla/",
    },
    {
      icon: "mail",
      url: "georginacostilla.gc@gmail.com",
    },
    {
      icon: "logo-github",
      url: "https://github.com/georginacostilla",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center">
        <img src={hero} alt="Logos de las skills" className="w-2/4 sm:w-2/3 md:w-2/3 h-auto object-contain" />
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              ¡Hola!
              <br />
            </span>
            Mi nombre es <span>Georgina Costilla</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contáctame</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {redes.map(({ icon, url }) => (
              <a
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer text-4xl"
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
