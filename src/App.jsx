import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import NavbarBody from './component/NavbarBody'
import About from "./pages/About"
import MagicSpoon from "./pages/MagicSpoon"
import Shopnow from "./pages/Shopnow"
import ProtinSection from './component/ProtinSection'
import Product from './component/Product'
import Footer from './component/Footer'
import Body from './component/Body'

function App() {


  return (
    <div className='body'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<NavbarBody/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/magicSpoon' element={<MagicSpoon/>}/>
        <Route path='/shopnow' element={<Shopnow/>}/>
      </Routes>
      <Body/>
      <ProtinSection/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default App
