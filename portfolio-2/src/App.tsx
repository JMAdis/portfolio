import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import PortfolioTile from "./components/PortfolioTile/PortfolioTile";

import './App.css'

const App = () => {

  return (
    <div>
      <Nav />
      <About />
      <Skills />
      <PortfolioTile />
    </div>
  )
}

export default App
