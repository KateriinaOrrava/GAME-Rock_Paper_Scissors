import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Scoreboard from './pages/Scoreboard/Scoreboard';
import Game from './pages/Game/Game';
import { NavLink } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation, Trans } from 'react-i18next';

type lng = {
    nativeName: string;
    flag: string
    }

    type lngs = {lng:lng}
const lngs = {
  en: { nativeName: 'English', flag: 'https://em-content.zobj.net/thumbs/120/joypixels/340/flag-united-kingdom_1f1ec-1f1e7.png' },
  de: { nativeName: 'Deutsch', flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZiLxeFo3tedezUNj0mOXJMx1dMjY-DYLzO0vC34LOw&s' }, 
  lv: { nativeName: 'Latvian', flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVLPS87PPH44zCIhB9eSvSs-ggH0-y3F4km62T7s89Q&s'}
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
        <nav className='navigation_container navMenu'>
          <div className='navigation_container__nav_links'>          
            <NavLink to="/">{t('d.navHome')}</NavLink> 
            <NavLink to="/game">{t('d.navGame')}</NavLink>
            <NavLink to="/scoreboard">{t('d.navScoreBoard')}</NavLink>
          </div>
        </nav>
      <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path='/game' element={<Game />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
<footer>
      {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              <img src={lngs[lng].flag} alt={lngs[lng].nativeName} title={lngs[lng].nativeName} className='languageFlag'/> 
            </button>
          ))}
</footer>
    </>
  )
}

export default App
