// All site is connected here
// Made with using React
import React from 'react'
import '../Header/Header'
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import About from "../About/About"
import Benefits from "../Benefits/Benefits"
import Works from "../Works/Works"
import Portfolio from "../Portfolio/Portfolio"
import Skills from "../Skills/Skills"
import Burger from "../BurgerMenu/Burger"
import Team from '../Team/Team'
import SwiperTeam from '../Swipers/TeamSwiper/Swiperteam'
import News from "../News/News"
import Reg from "../Registration/Registration"
import Footer from "../Footer/Footer"
import Swipernews from "../Swipers/NewsSwiper/Newsswiper";

class App extends React.Component {
  render() {
    return (
        <div>
            <Nav />
            <Burger />
            <Header />
            <About />
            <Benefits />
            <Works />
            <Portfolio />
            <Skills />
            <Team />
            <SwiperTeam />
            <News />
            <Reg />
            <Swipernews />
            <Footer />
        </div>
    )
  }

}

export default App
