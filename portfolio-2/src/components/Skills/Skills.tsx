import "./Skills.scss";
import Git from "../../assets/skills-icons/Git.png";
import HTML from "../../assets/skills-icons/HTML.png";
import CSS from "../../assets/skills-icons/CSS.png";
import JS from "../../assets/skills-icons/JS.png";
import Sass from "../../assets/skills-icons/Sass.png";
import Java from "../../assets/skills-icons/Java.png";
import BEM from "../../assets/skills-icons/BEM.png";
import React from "../../assets/skills-icons/React.png";
import SpringBoot from "../../assets/skills-icons/SpringBoot.png";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__heading" id="skills-scroll2">
        <h2 className="skills__title" id="skills-scroll">
          Skills
        </h2>
        <p className="skills__text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          harum necessitatibus suscipit! Labore tempora quae molestias facilis
          dolor odit fugiat dolorum libero possimus.
        </p>
      </div>
      <div className="skills__all">
        <div>
          <img src={Git} alt="Git logo" className="skills__all--icon" />
          <p>Git</p>
        </div>
        <div>
          <img src={HTML} alt="HTML5 logo" className="skills__all--icon" />
          <p>HTML5</p>
        </div>
        <div>
          <img src={CSS} alt="CSS3 logo" className="skills__all--icon" />
          <p>CSS3</p>
        </div>
        <div>
          <img src={JS} alt="JavaScript logo" className="skills__all--icon" />
          <p>JavaScript</p>
        </div>
        <div>
          <img src={Sass} alt="SCSS logo" className="skills__all--icon" />
          <p>SCSS</p>
        </div>
        <div>
          <img src={Java} alt="Java logo" className="skills__all--icon" />
          <p>Java</p>
        </div>
        <div>
          <img src={BEM} alt="BEM logo" className="skills__all--icon" />
          <p>BEM</p>
        </div>
        <div>
          <img src={React} alt="React logo" className="skills__all--icon" />
          <p>React</p>
        </div>
        <div className="skills__all--springboot">
          <img
            src={SpringBoot}
            alt="Spring Boot logo"
            className="skills__all--icon"
          />
          <p>Spring Boot</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
