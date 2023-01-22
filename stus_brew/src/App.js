import './App.css';
import Home from './home/Home';
import About from './components/About/About';
import { Link, Route, Routes } from 'react-router-dom';
// import logo from '../Assets/hat-logo.png';

function App() {
  const logo = process.env.PUBLIC_URL + '/assets/hat-logo.png'

  return (
    <div className="App">
      <navbar>
        <section className='logo'>
          <Link to="/"><img className="hat-logo" alt='Cut all logo' src={logo} /></Link>
        </section>
        <nav>

          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About</Link>
        </nav>
      </navbar>

      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About
            
          />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
