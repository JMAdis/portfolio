import { useCallback, useState } from "react";
import "./Cv.scss";

const Cv = () => {
  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const toggleIsExpanded = useCallback((index: number) => {
    setIsExpanded((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  }, []);

  return (
    <section className="cv">
      <h2 className="cv__title">My Journey</h2>
      <p className="cv__intro">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        tempora rem eligendi expedita, autem maiores voluptas nihil, doloribus
        distinctio nam quo, amet fugit vero est! Magnam quisquam ipsam nam
        atque!
      </p>
      <h3 className="cv__subtitle">Experience</h3>
      <ul>
        <li>
          <button onClick={() => toggleIsExpanded(0)} className="cv__button">
            Trainee Software Developer @ Nology{" "}
            {isExpanded[0] ? "\u2796" : "\u2795"}
          </button>
        </li>
        <div
          className="cv__collapsible"
          style={{ height: isExpanded[0] ? "auto" : "0px" }}
        >
          <p className="cv__grid--date">Nov 23 - Present</p>
          <ul className="cv__grid--body">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>
              Quod labore libero earum, maiores odio delectus accusantium autem
              minus repudiandae et temporibus reprehenderit pariatur aliquid
              asperiores adipisci unde.
            </li>
            <li>
              Quod labore libero earum, maiores odio delectus accusantium autem
              minus repudiandae et temporibus reprehenderit pariatur aliquid
              asperiores adipisci unde.
            </li>
          </ul>
        </div>
        <li>
          <button onClick={() => toggleIsExpanded(1)} className="cv__button">
            Communications and Content Manager @ Tilton Consultancy{" "}
            {isExpanded[1] ? "\u2796" : "\u2795"}
          </button>
        </li>
        <div
          className="cv__collapsible"
          style={{ height: isExpanded[1] ? "auto" : "0px" }}
        >
          <p className="cv__grid--date">June 23 - Nov 23</p>
          <ul className="cv__grid--body">
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>
              Quod labore libero earum, maiores odio delectus accusantium autem
              minus repudiandae et temporibus reprehenderit pariatur aliquid
              asperiores adipisci unde.
            </li>
            <li>
              Quod labore libero earum, maiores odio delectus accusantium autem
              minus repudiandae et temporibus reprehenderit pariatur aliquid
              asperiores adipisci unde.
            </li>
          </ul>
        </div>
        <li>
          <button onClick={() => toggleIsExpanded(2)} className="cv__button">
            Marketing Communications Executive @ CMR Surgical{" "}
            {isExpanded[2] ? "\u2796" : "\u2795"}
          </button>
        </li>
      </ul>
      <div
        className="cv__collapsible"
        style={{ height: isExpanded[2] ? "auto" : "0px" }}
      >
        <p className="cv__grid--date">Jan 22 - May 23</p>
        <ul className="cv__grid--body">
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
          <li>
            Quod labore libero earum, maiores odio delectus accusantium autem
            minus repudiandae et temporibus reprehenderit pariatur aliquid
            asperiores adipisci unde.
          </li>
          <li>
            Quod labore libero earum, maiores odio delectus accusantium autem
            minus repudiandae et temporibus reprehenderit pariatur aliquid
            asperiores adipisci unde.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cv;
