import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Overlay from '../Overlay/Overlay';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerOpened(true);
  };
  const closeAllPopups = () => {
    setIsBurgerOpened(false);
  };
  useEffect(() => {
    function closeByClickOutside(evt) {
      if (evt.target.classList.contains('overlay')) {
        setIsBurgerOpened(false);
      }
    }
    if (isBurgerOpened) {
      document.addEventListener('mousedown', closeByClickOutside);
      return () => {
        document.removeEventListener('mousedown', closeByClickOutside);
      };
    }
  }, [isBurgerOpened]);
  return (
    <div className="app">
      <Header
        isLogged={!isLogged}
        isBurgerOpened={isBurgerOpened}
        onBurgerClick={handleOpenBurgerMenu}
        onClose={closeAllPopups}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
            </Main>
          }
        />
        <Route
          path="/movies"
          element={
            <Movies>
              <SearchForm />
              <MoviesCardList />
            </Movies>
          }
        />
      </Routes>
      <Footer />
      <Overlay
        isLogged={!isLogged}
        isBurgerOpened={isBurgerOpened}
        handleClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
