import { useState } from "react";
import imgChuma from "../assets/images/sebasChumacero.png";
import imgMaxi from "../assets/images/maxiGiordani.jpg";
import imgAri from "../assets/images/ariAlderete.png";
import imgBalta from "../assets/images/baltaDaud.png";
import imgJoaquin from "../assets/images/joaSaavedra.png";
import imgFran from "../assets/images/francoBrizuela.png";

const testimonios = [
  {
    img: imgChuma,
    alt: "foto de Sebastian",
    texto:
      "Georgina se destaca siempre en su labor, controla y supervisa a los integrantes del grupo para que llevemos las tareas a cabo y de la mejor forma. Ayuda y siempre trata de sacar lo mejor de cada uno de sus compañeros de tareas y en el caso que alguno no esté a la altura de lo cometido, ella está a su lado para apoyarlo y juntos, salir adelante.",
    persona: "Sebastian Chumacero",
    ocupacion: "Profesor de Arduino - Estudiante de Programación UTN-FRT",
  },
  {
    img: imgMaxi,
    alt: "foto de Maxi",
    texto:
      "Recomiendo a Georgina por su proactividad, responsabilidad y sobre todo su compañerismo a la hora de encarar proyectos tanto en el ámbito educativo como lo es en el laboral. Georgina siempre estará dispuesta a ayudar al grupo laboral o educativo, a su vez que siempre aporta sus conocimientos de manera veloz y concisa.",
    persona: "Maximiliano Giordani",
    ocupacion: "Licenciado en Cs. de la Comunicación social",
  },
  {
    img: imgBalta,
    alt: "foto de Balta",
    texto:
      "Georgina es una excelente compañera para trabajar, siempre es la primera en tomar iniciativas y su rasgo de liderazgo siempre guía al grupo a llegar a los objetivos deseados. Todo el tiempo busca aprender más y desarrollarse mejor como programadora.",
    persona: "Baltasar Daud",
    ocupacion: "Estudiante de Programación UTN-FRT",
  },
  {
    img: imgAri,
    alt: "foto de Ari",
    texto:
      "Georgina es muy proactiva en su tarea, tiene alta capacidad de resolución a problemas que se presentan durante el desarrollo de un programa, con actitud siempre optimista y con mirada positiva que la llevan a lograr los objetivos planteados. Cómo estudiante, es una persona que siempre está con ganas de aprender más, de despejar dudas, tiene buena predisposición para nutrirse de conocimientos y así desarrollarse profesionalmente.",
    persona: "Ariana Alderete",
    ocupacion: "Estudiante de Ingeniería en sistemas UTN-FRT",
  },
  {
    img: imgJoaquin,
    alt: "foto de Joaquin",
    texto:
      "Georgina es una persona que se caracteriza por su gran entusiasmo y dedicación, tanto como estudiante como programadora. Sabe utilizar todos los recursos que tiene a su disposición, de tal manera que puede solucionar cualquier problema que se encuentra en el camino. Es muy comunicativa con sus pares y superiores, ayuda a quienes lo necesitan y no duda en pedir ayuda cuando lo requiere. A ello se suma su gran capacidad para el liderazgo.",
    persona: "Joaquín Saavedra",
    ocupacion:
      "Técnico Univ. en Cs. de la Comunicación social - Estudiante de Programación UTN-FRT",
  },
  {
    img: imgFran,
    alt: "foto de Franco",
    texto:
      "Una virtud que podría resaltar de Georgina es su constancia y tenacidad a la hora de encarar un proyecto sea académico o laboral. Con mucha capacidad de aprendizaje y resolutiva que la destacan a la hora de resolver problemas o lograr objetivos planteados.",
    persona: "Franco Brizuela",
    ocupacion: "Estudiante de Programación UTN-FRT",
  },
];

export default function TestimoniosCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonios.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonios.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="p-3">
        <h3 className="text-center text-4xl font-semibold mt-16">
          Testimonios <span className="text-primary">reales</span>
        </h3>
        <p className="text-center text-gray-400 mt-3 text-lg">Estas son algunas de las
          opiniones de colegas y/o compañeros de carrera sobre mi trabajo.</p>
      </div>
      <section
        id="testimonios"
        className="flex justify-center items-center py-12 m-5"
      >
        <div className="relative max-w-xl w-full text-center p-6 bg-gray-800 shadow-xl rounded-2xl">
          <img
            src={testimonios[activeIndex].img}
            alt={testimonios[activeIndex].alt}
            className="mx-auto rounded-full w-40 h-40 object-cover mb-4"
          />
          <p className="italic mb-4 p-8 text-gray-300">
            "{testimonios[activeIndex].texto}"
          </p>
          <div className="text-sm text-gray-400">
            <p className="font-semibold">{testimonios[activeIndex].persona}</p>
            <p>{testimonios[activeIndex].ocupacion}</p>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 shadow"
          >
            <ion-icon name="chevron-back-outline" size="large"></ion-icon>
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
          >
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </button>
        </div>
      </section>
    </>
  );
}