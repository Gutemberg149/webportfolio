import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";

const knowledegBox = [
  {
    id: 1,
    icon: <AiOutlineHtml5 />,
    tec: "HTML5",
    textPortugues:
      "HTML5 (Hypertext Markup Language 5) é uma linguagem de marcação onde utilizamos para a criação de páginas na Web.",
    textInglish:
      "HTML5 (Hypertext Markup Language 5) is a markup language used for structuring and presenting content on the World Wide Web.",
  },
  {
    id: 2,
    icon: <DiCss3 />,
    tec: "CSS",
    textPortugues:
      "Utilizamos o CSS para estilizar elementos escritos em uma linguagem de marcação como HTML.",
    textInglish:
      " CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
    tec: "JavaScript",
    textPortugues:
      "JavaScript é uma linguagem de programação utilizada que adiciona interatividade ao seu site.",
    textInglish:
      "JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive.",
  },
  {
    id: 4,
    icon: <FaReact />,
    tec: "React",
    textPortugues:
      "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    textInglish:
      "React is an open-source JavaScript front-end library focused on creating user interfaces on web pages.",
  },
  {
    id: 5,
    icon: <SiTypescript />,
    tec: "TypeScript",
    textPortugues:
      "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft é um superconjunto estrito de JavaScript.",
    textInglish:
      "TypeScript is programming language open sorce, developed by Microsoft, that adds static typing with optional type annotations to JavaScript",
  },
  {
    id: 6,
    icon: <SiStyledcomponents />,
    tec: "Styled Comp.",
    textPortugues:
      "Biblioteca que possibilita escrever códigos CSS dentro do JavaScript. ",
    textInglish:
      "Library that allows you to write CSS in JS while building custom components in Reactjs ",
  },
  // {
  //   icon: <SiStyledcomponents />,
  //   tec: "Redux",
  //   // tec2: "Comp.",
  //   textPortugues:
  //     "Biblioteca que possibilita escrever códigos CSS dentro do JavaScript. ",
  //   textInglish:
  //     "Library that allows you to write CSS in JS while building custom components in Reactjs ",
  // },
];
export default knowledegBox;
