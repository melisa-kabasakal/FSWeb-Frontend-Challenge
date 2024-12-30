import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

import Hero from './pages/Hero';
import Skills from './components/Skills';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Footer from './pages/footer';
function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <DarkModeProvider>
      <div className="dark:bg-gray-800 dark:text-white">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </DarkModeProvider>
  );
}

export default App


