

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';

function App(){
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Header/>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App


