import chakraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpg";
import dymamicFormProject from "../../images/projects/dynamic.jpg";
import gasolineraProject from "../../images/projects/gasolinera.jpg";
import marvelProject from "../../images/projects/marvel.jpg";
import rickMorty from "../../images/projects/rick-morty.jpg";
import tareasProject from "../../images/projects/todo.jpg";

export const projectsPortfolio = [
  {
    title: "Rick & Morty API",
    image: rickMorty,
    techs: [
      { name: "React ", src: reactImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      " Aplicacion creada con ReactJS y CSS para realizar peticiones  a la API externa de Rick and Morty.",
    repository: "https://https://https://github.com/thonix30/rickandmorty-proyect-api",
    website: "https://rickandmorty-react-api-thonix30.netlify.app",
  },
  {
    title: "Listado Tareas",
    image: tareasProject,
    techs: [
      { name: "React ", src: reactImage },
      { name: "Semantic UI React", src: semanticImage },
    ],
    description:
      "Aplicación creada con React JS y Semantic UI para hacer una lista de tareas donde puedes agregarla o quitarla utilizando Local Storage",
    repository: "https://github.com/ratasi/todolist-udemy",
    website: "#!",
  },
  {
    title: "Simpson API",
    image: simpsonProject,
    techs: [
      { name: "React JS ", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Aplicación creada con React JS y Styled Components para realizar una solicitud a una API externa de Simpsons.",
    repository: "https://github.com/ratasi/simpson-phrases",
    website: "#!",
  },
  {
    title: "Marvel API",
    image: marvelProject,
    techs: [
      { name: "React", src: reactImage },
      { name: "React Router ", src: reactRouterdomImage },
      { name: "Sass", src: sassImage },
      { name: "Semantic", src: semanticImage },
    ],
    description:
      "Aplicación creada con React JS, React Router y Sass para realizar una solicitud a una API externa de Marvel.",
    repository: "https://github.com/ratasi/marvel-react",
    website: "#!",
  },
  {
    title: "Formulario Dinamico",
    image: dymamicFormProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "React Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Aplicación de una landing page creada con React JS y React Bootstrap para hacer un formulario con campos dinámicos.",
    repository: "https://github.com/ratasi/dynamic-form-project",
    website: "#!",
  },
  {
    title: "Estacion de Gasolina",
    image: gasolineraProject,
    techs: [
      { name: "Vite", src: viteImage },
      { name: "Chakra", src: chakraImage },
      { name: "React Router DOM", src: reactRouterdomImage },
    ],
    description:
      "Aplicación creada con Vite donde puedes guardar la información y verla en un resumen",
    repository: "https://github.com/ratasi/gasolinera-react-vite",
    website: "#!",
  },
];