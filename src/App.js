import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home'
import Imates from './components/imate/imates';
import Nav from './components/nav/nav';
function App() {
  return (
    <>
    <Nav /> 
      <Home />
    </>
  );
}

// <Nav />
export default App;
