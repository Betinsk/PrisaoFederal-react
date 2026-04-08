import './App.css';
import Footer from './components/footer/FooterP';
import Nav from './components/nav/nav';
import Routess from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Routess/>
      
    </>
  );
}

// <Nav />
export default App;
