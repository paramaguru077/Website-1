import React from 'react'
import Navbar from './Compontent/Navbar'
import HeroSection from './Compontent/HeroSection'
import Feature from './Compontent/Feature'
import WorkFlow from './Compontent/WorkFlow'
import Pricing from './Compontent/Pricing'
import Testmoninal from './Compontent/Testmoninal'
import Footer from './Compontent/Footer'
import{Routes,Route,useLocation} from 'react-router-dom'
import Create from './Compontent2/Create'
import Login from './Compontent2/Login'

import{AnimatePresence} from 'framer-motion'

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes =['/create','/login'];
 
  return (
    <>   

       {!hideNavbarRoutes.includes(location.pathname) && <Navbar/>}
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/features' element={<Feature/>}/>
        <Route path='/workflow' element={<WorkFlow/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/testmoninal' element={<Testmoninal/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>
      </AnimatePresence>
       

     
     



    
    </>
    
  )
}

export default App