import './App.css'
import Hello from './components/Hello/Hello'
import Counter from './components/Counter/Counter'
import Welcome from './components/Welcome/Welcome'
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
