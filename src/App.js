import './App.css'
import NavBar from './components/Header/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Fan from './pages/Fan';
import Survey from './pages/Survey';
function App() {
  return (
    <div className="App">
        <NavBar/>
      
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about-us' Component={About} />
            <Route path='/fan' Component={Fan} />
            <Route path='/survey' Component={Survey} />
        </Routes>
      
        <Footer/>

    </div>
  );
}

export default App;
