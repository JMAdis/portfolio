import "./About.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__imagecontainer">
        <img
          src="./components/headshot-placeholder.png"
          alt="headshot-placeholder"
          className="about__image"
        />
      </div>
      <header className="about__title">
        <h1>
          Hi I'm Jess,
          <div className="about__title--highlight">
            a Junior Software Developer based in the UK.
          </div>
        </h1>
      </header>
      <p className="about__text--body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        sapiente ut et rem aliquid sint animi quo nobis, fuga dicta quos
        pariatur illum ullam deleniti libero fugit, officia reiciendis
        necessitatibus.
      </p>
      <div className="about__cta">
        <a href="#skills-scroll" className="about__cta--scroll">
          Scroll Down
        </a>
        <button className="about__cta--button" href="#skills-srcoll2">
          <img
            src="./components/bi_arrow-down-circle.png"
            alt="arrow"
            className="about__cta--arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default About;
