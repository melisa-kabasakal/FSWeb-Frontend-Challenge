import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

import Hero from './pages/Hero';
import Skills from './components/Skills';
import Profile from './pages/Profile';
import Projects from './pages/Projects';

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App


