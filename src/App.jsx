import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

import Hero from './pages/Hero'
import Skills from './components/Skills'
import Profile from './pages/Profile'
import Projects from './pages/Projects'

import Footer from './pages/Footer.jsx'


import CookieConsent from './components/CookieConsent.jsx'
function App() {

  return (

    <>

      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <CookieConsent />
      <ToastContainer position='bottom-right' autoClose="2000" />
    </>

  )
}

export default App


