import { Route, Switch, Router } from 'react-router-dom';
import './App.css';
import Home from './components/home/home'
import Nav from './components/nav/nav';
import Imates from './components/imate/imates';
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
