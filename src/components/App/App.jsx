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
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';

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
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Header
                isLogged={isLogged}
                isBurgerOpened={isBurgerOpened}
                onBurgerClick={handleOpenBurgerMenu}
                onClose={closeAllPopups}
              />
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
              <Portfolio />
              <Footer />
              <Overlay
                isLogged={!isLogged}
                isBurgerOpened={isBurgerOpened}
                handleClose={closeAllPopups}
              />
            </Main>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Movies>
                <Header
                  isLogged={!isLogged}
                  isBurgerOpened={isBurgerOpened}
                  onBurgerClick={handleOpenBurgerMenu}
                  onClose={closeAllPopups}
                />
                <SearchForm />
                <MoviesCardList savedVariant={false} />
                <Footer />
                <Overlay
                  isLogged={!isLogged}
                  isBurgerOpened={isBurgerOpened}
                  handleClose={closeAllPopups}
                />
              </Movies>
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies>
              <Header
                isLogged={!isLogged}
                isBurgerOpened={isBurgerOpened}
                onBurgerClick={handleOpenBurgerMenu}
                onClose={closeAllPopups}
              />
              <SearchForm />
              <MoviesCardList savedVariant={true} />
              <Footer />
              <Overlay
                isLogged={!isLogged}
                isBurgerOpened={isBurgerOpened}
                handleClose={closeAllPopups}
              />
            </SavedMovies>
          }
        />
        <Route
          path="/profile"
          element={
            <Profile name="Владимир" email="pochta@mail.net">
              <Header
                isLogged={!isLogged}
                isBurgerOpened={isBurgerOpened}
                onBurgerClick={handleOpenBurgerMenu}
                onClose={closeAllPopups}
              />
              <Overlay
                isLogged={!isLogged}
                isBurgerOpened={isBurgerOpened}
                handleClose={closeAllPopups}
              />
            </Profile>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
