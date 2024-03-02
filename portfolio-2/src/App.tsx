import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import PortfolioList from "./containers/PortfolioList/PortfolioList";
import { Projects } from "./data/ProjectInfo";

const App = () => {
  return (
    <div>
      <Nav />
      <About />
      <Skills />
      <PortfolioList projects={Projects} />
    </div>
  )
}

export default App
