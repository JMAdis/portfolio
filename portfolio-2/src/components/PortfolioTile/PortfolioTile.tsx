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
    <div className="projects-group">
      <img src={img} alt={title} className="projects-group__image" />
      <p className="projects-group__title">{title}</p>
      <div className="projects-group__skills">
        <a href="#" className="projects-group__skills-cat">
          {primarylanguage}
        </a>
        <a href="#" className="projects-group__skills-cat">
          {secondarylanguage}
        </a>
      </div>
    </div>
  );
};

export default PortfolioTile;