import Header from '../Header/Header';
import { useState } from 'react';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="app">
      <Main>
        <Header isLogged={isLogged} />
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
