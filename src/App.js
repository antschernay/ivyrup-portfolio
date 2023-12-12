import { useTranslation } from 'react-i18next';
import About from './components/About';
import Navigation from './components/Navigation'
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Intro from './components/Intro';

const languages =  [
  {
    code: 'sk',
    name: 'Slovenčina',
    country_code: 'sk'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  }

]



export default function App() {
  const {t} = useTranslation();


  return (
    <>
      <Navigation t={t} languages={languages} />
      <Intro t={t}/>
      <About t={t} />
      <Services t={t}/>
      <Reviews t={t} />
      <Contact t={t} />
    </>
  )
}

