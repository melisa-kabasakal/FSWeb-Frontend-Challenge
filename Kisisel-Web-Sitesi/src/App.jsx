import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

import Hero from './pages/Hero'
import Skills from './components/Skills'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import { DarkModeProvider } from './contexts/DarkModeContext'
import Footer from './pages/Footer.jsx'

import LanguageContextProvider from './contexts/LanguageContext.jsx'
import { CookieProvider } from './contexts/CookieContext.jsx'
import CookieConsent from './components/CookieConsent.jsx'
function App() {

  return (
    <CookieProvider>
      <LanguageContextProvider>
        <DarkModeProvider>
          <div className="dark:bg-customBlack  dark:text-customWhite">
            <Hero />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
            <CookieConsent />
            <ToastContainer position='bottom-right' autoClose="2000" />
          </div>
        </DarkModeProvider>
      </LanguageContextProvider>
    </CookieProvider>
  )
}

export default App


