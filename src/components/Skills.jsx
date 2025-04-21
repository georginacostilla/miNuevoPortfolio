
const Skills = () => {

  const skills = [
    { logo: "logo-html5", name: "HTML", count: 86 },
    { logo: "logo-css3", name: "CSS", count: 85 },
    { logo: "brush", name: "Bootstrap", count: 70 },
    { logo: "logo-javascript", name: "JavaScript", count: 88 },
    { logo: "logo-react", name: "React JS", count: 80 },
    { logo: "logo-nodejs", name: "Node.js", count: 40 },
    { logo: "construct", name: "NestJS", count: 45 },
    { logo: "layers", name: "Prisma", count: 68 },
    { logo: "server", name: "PostgreSQL", count: 70 },
    { logo: "flask", name: "Postman", count: 85 },
    { logo: "document-text", name: "Swagger", count: 60 },
    { logo: "logo-github", name: "Git / GitHub", count: 90 },
  ];

  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Stack <span className="text-primary">tecnológico</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Mis conocimientos</p>
        <div className="overflow-x-auto mt-12 p-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-x-1 gap-y-4 justify-items-center">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="border-2 group border-cyan-600 w-40 bg-gray-900 p-3 rounded-xl hover:scale-105 transition-transform duration-200 flex flex-col items-center"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                  }}
                  className="w-20 h-20 flex items-center justify-center rounded-full mb-2"
                >
                  <div className="text-4xl w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                </div>
                <p className="text-base text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;