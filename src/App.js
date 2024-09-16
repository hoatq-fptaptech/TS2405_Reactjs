import './App.css'
import NavBar from './components/Header/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Fan from './pages/Fan';
import Survey from './pages/Survey';
import Regsiter from './pages/Register';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
function App() {
  return (
    <div className="App">
        <NavBar/>
      
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about-us' Component={About} />
            <Route path='/fan' Component={Fan} />
            <Route path='/survey' Component={Survey} />
            <Route path='/register' Component={Regsiter} />
            <Route path='/category/:slug' Component={Category} />
            <Route path='/product/:id' Component={ProductDetail} />
            <Route path='/products' Component={Products} />
        </Routes>
      
        <Footer/>

    </div>
  );
}

export default App;
