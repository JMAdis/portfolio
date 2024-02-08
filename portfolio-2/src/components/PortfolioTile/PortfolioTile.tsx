import "./PortfolioTile.scss";

type PortfolioTileProps = {
  title: string;
  primarylanguage: string;
  secondarylanguage?: string;
  repo: string;
  link?: string;
  img: string;
};

const PortfolioTile = ({
  title,
  primarylanguage,
  secondarylanguage,
  repo,
  link,
  img,
}: PortfolioTileProps) => {
  return (
    <div className="projectsgroup__proj1">
      <img src={img} alt={title} className="projectsgroup__proj1--image" />
      <p className="projectsgroup__proj1--title">{title}</p>
      <div className="projectsgroup__proj1--skills">
        <a href="#" className="projectsgroup__proj1--skillscat">
          {primarylanguage}
        </a>
        <a href="#" className="projectsgroup__proj1--skillscat">
          {secondarylanguage}
        </a>
      </div>
    </div>
  );
};

export default PortfolioTile;