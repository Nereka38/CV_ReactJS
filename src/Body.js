import React from 'react';
import './Body.css';
import Fade from 'react-reveal/Fade';
function Body() {

  return (
   <div className="main">
   {/* <section id="nav">
      <a href="#sectionCourse">Cursos y Formación</a>
      <a href="#sectionSkill">Herramientas</a>
      <a href="#sectionLanguage">Idiomas</a>
      <a href="#sectionEducation">Educación</a>
      <a href="#sectionExperience">Experiencia</a>
    </section> */}
    <Fade bottom  class="reveal">
      <h3 id="sectionCourse">Cursos y Formación</h3>
      <article className='course reveal'>
        <div class='title'>
          <h4>Java Bootcamp</h4>
        </div>
        <div className="descrition">
          <p>Uso de herramientas como Java, Spring MVC, Spring Boot, WS REST, Thymeleaf</p>
        </div>
      </article>
      <article className='course reveal'>
        <div className='title'>
          <h4>Aspectos básicos del diseño de la experiencia de usuario</h4>
        </div>
        <div className="descrition">
          <p>Diseñar productos, servicios y aplicaciones centrándose principalmente en el usuario.</p>
        </div>
      </article>
      <article className='course reveal'>
        <div class='title'>
          <h4>Full-Stack Developer Bootcamp</h4>
        </div>
        <div class="descrition">
          <p>Utilización de herramientas como HTML5, CSS3, Javascript, Sass, Bootstrap, Node, Vue, PHP, Java, Laravel</p>
        </div>
      </article>
      <article className='course reveal'>
        <div class='title'>
          <h4>TeachT3ch: Introducción al desarrollo web con Javascript</h4>
        </div>
        <div class="descrition">
          <p>Creación de aplicaciones web completas con HTML5, CSS3, DOM, JavaScript, Local Storage, junto con un proyecto final.</p>
        </div>
      </article>
      <article className='course reveal'>
        <div class='title'>
          <h4>Conviértete en diseñador gráfico</h4>
        </div>
        <div class="descrition">
          <p>Crear conceptos visuales para expresar ideas que inspiren, informen y transformen. Dominar los conceptos básicos para construir proyectos de diseño innovadores, y descubrir las habilidades que necesitas para dominar la comunicación visual. Aprender cómo gestionar equipos de diseño.</p>
        </div>
      </article>
    </Fade>
    <Fade bottom >
      <h3 id="sectionSkill">Herramientas</h3>
      <div className='skills reveal'>
        <div className='column'>
          <h4>Frontend:</h4>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Sass</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>VUE</li>
            <li>ParcelJS</li>
            <li>npm</li>
            <li>Thymeleaf</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Backend:</h4>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>JSON</li>
            <li>PHPUnit</li>
            <li>Java</li>
            <li>Laravel</li>
            <li>Spring Boot</li>
            <li>Spring MVC</li>
          </ul>
        </div>
        <div className='column'>
          <h4>Otros:</h4>
          <ul>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Adobe llustrator</li>
            <li>Canva</li>
            <li>Microsoft Office</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
      </div>
    </Fade>
    <Fade bottom >
      <div>
        <h3 id="sectionLanguage">Idiomas</h3>
        <article className="reveal">
          <div className='school'>
            <strong><span>🇬🇧 Inglés:</span></strong><strong> Intermedio B1/B2</strong>
          </div>
        </article>
        <article className="reveal">
          <div className='school'>
            <strong><span>🇪🇸 Español:</span></strong><strong> Nativo</strong>
          </div>
        </article>
      </div>
    </Fade>
    <Fade bottom>
      <h3 id="sectionEducation">Educación</h3>
      <article className="reveal">
        <div className='school'>
          <span>2019-2020</span> <strong>Máster en Nutrición Clínica y Endocrinología</strong>
        </div>
        <div className="descrition">
         ICNS - Universidad Católica de San Antonio de Murcia
        </div>
      </article>
      <article className="reveal">
        <div className='school'>
          <span>2015-2019</span> <strong>Grado en Nutrición Humana y Dietética</strong>
        </div>
        <div>
          Universidad de Santiago de Compostela
        </div>
      </article>
      <article className="reveal">
        <div className='school'>
          <span>2013-2015</span> <strong>Técnico Superior de Laboratorio Clínico</strong>
        </div>
        <div>
          Svida Formación
        </div>
      </article>
    </Fade>
    <Fade bottom className="reveal">
      <h3 id="sectionExperience" >Experiencia</h3>
      <article className="reveal">
        <div className='job-title'>
          <span>11.2022 - Actualidad</span> <strong>Software Engineer</strong><br /> Capgemini 
        </div>
        <div>
          <ul className="job-description">
            <li>Desarrollo de aplicaciones web en Backend y Frontend</li>
            <li>Estudio de nuevas herramientas como Java, Spring Boot y React</li>
          </ul>
        </div>
      </article>
      <article className="reveal">
        <div className='job-title'>
          <span>08.2019 - 12.2022</span> <strong>Dietista</strong><br />  Serunion: Restauración Colectiva
        </div>
        <div>
          <ul className="job-description">
            <li>Gestión y organización de trabajadores en cocina.</li>
            <li>Control del Sistema APPCC.</li>
            <li>Velar por la calidad y salubridad de los alimentos.</li>
          </ul>
        </div>
      </article>
      <article className="reveal">
        <div className='job-title'>
          <span>04.2015 - 06.2015</span> <strong>Dietista-Nutricionista</strong><br /> Laboratorio de Higiene, Inspección y Control Alimentario (LHICA)
        </div>
        <div>
          <ul className="job-description">
            <li>Participar en trabajos grupales de investigación.</li>
            <li>Realizar análisis de alimentos para empresas, administraciones y entidades diversas.</li>
          </ul>
        </div>
      </article>
      <article className="reveal">
        <div className='job-title'>
          <span>02.2019 - 05.2019</span> <strong>Técnico de Laboratorio</strong><br /> Svida Formación 
        </div>
        <div>
          <ul className="job-description">
            <li>Realizar la extracción y el procesamiento de los diferentes componentes de la sangre.</li>
          </ul>
        </div>
      </article>
    </Fade>
   </div>
  );
}

export default Body;