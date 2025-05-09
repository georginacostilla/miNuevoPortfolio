
const Contacto = () => {
  const contacto_info = [
    {
      logo: "mail",
      text: "georginacostilla.gc@gmail.com",
      url: "mailto:georginacostilla.gc@gmail.com",
    },
    {
      logo: "logo-linkedin",
      text: "linkedin.com/in/georginacostilla",
      url: "https://linkedin.com/in/georginacostilla",
    },
    {
      logo: "logo-github",
      text: "github.com/georginacostilla",
      url: "https://github.com/georginacostilla",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const asunto = e.target[0].value;
    const message = e.target[1].value;

    const mailtoLink = `mailto:"Georgina Costilla"<georginacostilla.gc@gmail.com>?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contacto" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Contácta <span className="text-primary">me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Por consultas, propuestas laborales o proyectos de desarrollo, no dudes en contactarme.
        </p>

        <div className="mt-12 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Asunto"
              required
              className="p-3 rounded bg-gray-700 text-white outline-none"
            />
            {/* <input
              type="email"
              placeholder="Tu email"
              required
              className="p-3 rounded bg-gray-700 text-white outline-none"
            /> */}
            <textarea
              placeholder="Tu mensaje"
              rows={10}
              required
              className="p-3 rounded bg-gray-700 text-white outline-none"
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Enviar mensaje
            </button>
          </form>

          <div className="flex flex-col gap-7">
            {contacto_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-primary rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-base text-sm break-words text-gray-300 hover:underline"
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;