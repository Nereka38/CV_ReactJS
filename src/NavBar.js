import './NavBar.css';
import { Link } from "react-scroll";
function NavBar() {

  return (
   <>
   <nav id="nav">
              <Link activeClass="active" smooth spy to="sectionCourse">
                Cursos y Formación
              </Link>
              <Link activeClass="active" smooth spy to="sectionSkill">
                Herramientas
              </Link>
              <Link activeClass="active" smooth spy to="sectionLanguage">
                Idiomas
              </Link>
              <Link activeClass="active" smooth spy to="sectionEducation">
                Educación
              </Link>
              <Link activeClass="active" smooth spy to="sectionExperience">
                Experiencia
              </Link>
        </nav>
   </>
  );
}

export default NavBar;