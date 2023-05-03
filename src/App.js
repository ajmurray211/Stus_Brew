import './App.css';
import Home from './components/Home.js';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import MerchPage from './components/MerchPage';
import HamburgerNav from './components/navbars/HamburgerNav';
import BeanPage from './components/BeanPage';
import Details from './components/procucts/Details';
import { ProductContext } from './context/ProductContext';
import { useContext } from 'react';

function App() {
  const { selectedProduct } = useContext(ProductContext);

  return (
    <div className="App">
      <HamburgerNav />
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/merchPage' element={<MerchPage />}></Route>
          <Route path='/beanPage' element={<BeanPage />}></Route>
          <Route path="/details" element={selectedProduct === null ? <Home /> : <Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
