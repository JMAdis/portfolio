import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="navigation">
      <a className="navigation__left" href="#">
        JA
      </a>
      <div className="navigation__right">
        <button className="navigation__dropbtn">
          <img
            src="./components/dropdown icon 2.png"
            alt="dropdown icon"
            className="navigation__dropbtn--icon"
          ></img>
        </button>
        <div className="navigation__right--content">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#" className="navigation__right--cta">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav;